### qiskit-wasi

I needed to compile OpenBLAS manually to get a static library so that I could
build qiskit-aer as a static library.
```console
$ git clone https://github.com/xianyi/OpenBLAS.git
$ cd OpenBLAS
$ make

 OpenBLAS build complete. (BLAS CBLAS)

  OS               ... Linux             
  Architecture     ... x86_64               
  BINARY           ... 64bit                 
  C compiler       ... GCC  (cmd & version : cc (GCC) 9.2.1 20190827 (Red Hat 9.2.1-1))
  Library Name     ... libopenblas_haswellp-r0.3.9.dev.a (Multi-threading; Max num-threads is 8)

To install the library, you can run "make PREFIX=/path/to/your/installation install".
```

I manually copied libopenblas.a to `/usr/lib64`.
```console
$ sudo cp libopenblas.a /usr/lib64/libopenblas.a 
```

As mentioned in `CMakeList.txt` we have to manually copy
cmake/FindBLAS.cmake.fix-static-linking to `/usr/share/cmake/Modules/FindBLAS.cmake`:
```console
$ sudo cp cmake/FindBLAS.cmake.fix-static-linking /usr/share/cmake/Modules/FindBLAS.cmake
```

Configure:
```console
$ mkdir out && cd out
$ cmake -DSTATIC_LINKING=True ..
```
Build:
```console
$ make
```

I'm getting the following error:
```console
$ make -j8
[100%] Linking CXX executable Release/qasm_simulator
/usr/bin/ld: /usr/lib/gcc/x86_64-redhat-linux/9/libgomp.a(target.o): in function `gomp_target_init':
(.text+0x33c): warning: Using 'dlopen' in statically linked applications requires at runtime the shared libraries from the glibc version used for linking
/usr/bin/ld: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o:(.rodata+0x10e0): undefined reference to `slamch_'
/usr/bin/ld: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o:(.rodata+0x10e8): undefined reference to `cheevx_'
/usr/bin/ld: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o:(.rodata+0x10f0): undefined reference to `dlamch_'
/usr/bin/ld: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o:(.rodata+0x10f8): undefined reference to `zheevx_'
/usr/bin/ld: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o: in function `void eigensystem_hermitian<double>(matrix<std::complex<double> > const&, std::vector<double, std::allocator<double> >&, matrix<std::complex<double> >&)':
qasm_simulator.cpp:(.text._Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_[_Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_]+0x7c): undefined reference to `dlamch_'

/usr/bin/ld: qasm_simulator.cpp:(.text._Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_[_Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_]+0x28f): undefined reference to `zheevx_'
collect2: error: ld returned 1 exit status
make[2]: *** [CMakeFiles/qasm_simulator.dir/build.make:122: Release/qasm_simulator] Error 1
make[1]: *** [CMakeFiles/Makefile2:123: CMakeFiles/qasm_simulator.dir/all] Error 2
make: *** [Makefile:160: all] Error 2
```

```console
$ nm CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o  | grep _Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_
0000000000000000 W _Z21eigensystem_hermitianIdEvRK6matrixISt7complexIT_EERSt6vectorIS2_SaIS2_EERS4_
```
So this function uses these `slamch_` but it is not defined in the object file
and would therefore need to be linked but that is not being done.

$ nm -C CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o  | grep slamch_
                 U slamch_
```
So this is indefined in the object file. It is in the header but there is no
implementation for it so compilation. If we take a debug build and then use
lldb we should be able to figure out where this symbol is defined:
```
$ lldb -- ./Debug/qasm_simulator
(lldb) br s -n main
(lldb) r
(lldb) target modules lookup --symbol slamch_
1 symbols match 'slamch_' in /home/danielbevenius/work/quantum/qiskit-aer/out2/Debug/qasm_simulator:

1 symbols match 'slamch_' in /usr/lib64/libopenblas.so.0:
        Address: libopenblas.so.0[0x0000000001ef35f0] (libopenblas.so.0.PT_LOAD[2]..text + 31241712)
        Summary: libopenblas.so.0`slamch_
(lldb) target modules lookup --symbol cheevx_
1 symbols match 'cheevx_' in /home/danielbevenius/work/quantum/qiskit-aer/out2/Debug/qasm_simulator:

1 symbols match 'cheevx_' in /usr/lib64/libopenblas.so.0:
        Address: libopenblas.so.0[0x0000000001c0de80] (libopenblas.so.0.PT_LOAD[2]..text + 28204672)
        Summary: libopenblas.so.0`cheevx_
```
So we can see that these are in /usr/lib64/libopenblas.so.0 which is the shared
library:
```console
$ nm -D  /usr/lib64/libopenblas-r0.3.10.so | grep slamch_
0000000001f853e0 T LAPACKE_slamch_work
0000000001ef35f0 T slamch_
```
But we are linking against the static library and it does not seem to be there:
```console
$ nm  /usr/lib64/libopenblas.a | grep slamch_
```
Why is this symbol not include in the static archive?  
Hmm, look at these symbols they seem to all come from the LAPACK library. This
seems to happen if a fortran compiler is not available when compiling OpenBLAS.
Adding a fortran compiler and then re-compiling:
```console
$ sudo dnf install -y gfortran
```
And after this we can see that we have the symbols in the static archive:
```console
$ nm  libopenblas.a | grep slamch_
...
lapacke_slamch_work.o:
0000000000000000 T LAPACKE_slamch_work
```
(Recall that T means that the symbol is in the .text segment).

That took care of one issue but another surfaced after this:
```console
[100%] Linking CXX executable Release/qasm_simulator
/usr/bin/ld: /usr/lib/gcc/x86_64-redhat-linux/9/libgomp.a(target.o): in function `gomp_target_init':
(.text+0x33c): warning: Using 'dlopen' in statically linked applications requires at runtime the shared libraries from the glibc version used for linking
/usr/bin/ld: /usr/lib64/libopenblas.a(cunmtr.o): in function `cunmtr_':
cunmtr.f:(.text+0x305): undefined reference to `_gfortran_concat_string'
/usr/bin/ld: cunmtr.f:(.text+0x4bf): undefined reference to `_gfortran_concat_string'
/usr/bin/ld: cunmtr.f:(.text+0x521): undefined reference to `_gfortran_concat_string'
/usr/bin/ld: cunmtr.f:(.text+0x561): undefined reference to `_gfortran_concat_string'
/usr/bin/ld: /usr/lib64/libopenblas.a(zunmtr.o): in function `zunmtr_':
zunmtr.f:(.text+0x304): undefined reference to `_gfortran_concat_string'
/usr/bin/ld: /usr/lib64/libopenblas.a(zunmtr.o):zunmtr.f:(.text+0x4bf): more undefined references to `_gfortran_concat_string' follow
collect2: error: ld returned 1 exit status
make[2]: *** [CMakeFiles/qasm_simulator.dir/build.make:122: Release/qasm_simulator] Error 1
make[1]: *** [CMakeFiles/Makefile2:123: CMakeFiles/qasm_simulator.dir/all] Error 2
make: *** [Makefile:160: all] Error 2
```
I was able to force this by updating CMakeFiles/qasm_simulator.dir/link.txt:
```
ccache /usr/lib64/ccache/c++  -static -static-libgcc -static-libstdc++ -ffast-math -pedantic -Wall -Wfloat-equal -Wundef -Wcast-align -Wwrite-strings -Wmissing-declarations -Wredundant-decls -Wshadow -Woverloaded-virtual  -fopenmp -O3 -DNDEBUG -fopenmp CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o CMakeFiles/qasm_simulator.dir/src/simulators/statevector/qv_avx2.cpp.o -o Release/qasm_simulator  /usr/lib64/libopenblas.a /usr/lib/gcc/x86_64-redhat-linux/9/libgfortran.a /usr/lib64/libdl.a -lquadmath /home/danielbevenius/.conan/data/spdlog/1.5.0/_/_/package/942d5c94aa934511ee4500bda27908cb4e791b24/lib/libspdlog.a -lpthread /home/danielbevenius/.conan/data/fmt/6.2.0/_/_/package/b911f48570f9bb2902d9e83b2b9ebf9d376c8c56/lib/libfmt.a -pthread
```


Also make sure that you are using the correct clang++. I have one with wasm support
which is in ~/opt/bin and in the PATH. Use /usr/bin instead.

Now, after this I can compile but not link:
```console
$ make
[ 50%] Linking CXX executable qasm_simulator.wasm
wasm-ld: error: CMakeFiles/qasm_simulator.wasm.dir/contrib/standalone/qasm_simulator.cpp.o: undefined symbol: zgemm_
wasm-ld: error: CMakeFiles/qasm_simulator.wasm.dir/contrib/standalone/qasm_simulator.cpp.o: undefined symbol: zgemm_
```

Lets compile a dynamically linked executable and see which libraries it uses:
```console
$ ldd Release/qasm_simulator 
	linux-vdso.so.1 (0x00007fffcaf0a000)
	libopenblas.so.0 => /lib64/libopenblas.so.0 (0x00007fd8ecc25000)
	libdl.so.2 => /lib64/libdl.so.2 (0x00007fd8ecc1e000)
	libstdc++.so.6 => /lib64/libstdc++.so.6 (0x00007fd8eca24000)
	libm.so.6 => /lib64/libm.so.6 (0x00007fd8ec8de000)
	libgomp.so.1 => /lib64/libgomp.so.1 (0x00007fd8ec8a4000)
	libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007fd8ec88a000)
	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007fd8ec866000)
	libc.so.6 => /lib64/libc.so.6 (0x00007fd8ec69d000)
	libgfortran.so.5 => /lib64/libgfortran.so.5 (0x00007fd8ec3fb000)
	/lib64/ld-linux-x86-64.so.2 (0x00007fd8eef14000)
	libquadmath.so.0 => /lib64/libquadmath.so.0 (0x00007fd8ec3b1000)
```
The candidates that I would consider would be `openblas`,`gomp`, `gfortran`, and
`quadmath`.
We have to look for dynamic symbols (`-D`):
```console
$ nm -D /lib64/libopenblas.so | grep zgemm_
0000000000153d70 T zgemm_
...
```
We can also check the this symbol exist in the static openblas lib:
```console
$ nm /lib64/libopenblas.a | grep zgemm_
0000000000000000 T zgemm_
```
So what is missing is that when we are linking...


```console
$ nm -C CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o | grep zgemm_
                 U zgemm_
```

We might need install static libc and libstdc++ if we don't have them locally:
```console
$ sudo yum install glibc-static libstdc++-static
```
```console
$ cmake .. -DSTATIC_LINKING=True -DWASI_TARGET=True
```
CMake reports that is can find the OpenBLAS library:
```
-- BLAS library found: /usr/lib64/libopenblas.a
```
The problem is that we cannot specify this library to the wasm-ld linker as it
only deals with wasm object files.

$ cp /usr/lib64/libopenblas.a ~/work/wasm/wasi-sdk/download/wasi-sdk-8.0/share/wasi-sysroot/lib/

### Basic Linear Algebra Subprograms (BLAS)
Provides low level matrix operations.

### Linear Algebra Package (LAPACK)
Is a library of higher level linear algebra operations. LAPACK is built on top
of BLAS (uses BLAS operations)

Came out of a project named LINPACK which was written in the 70/80s. LAPACK is
designed to work well on modern computers with regard to CPU caches. LAPACK was
originally written in FORTRAN and the first FORTRAN standards restricted
identifiers to only 6 characters which is why the symbols in LAPACK are very
compact.

The format for symboal is `pmmaaa` where p 




### Qiskit-Aer
Uses [Conda](https://docs.conda.io/en/latest/) which is a package, deps, and
environment manager for multiple (any?) language. I though it was just for
python.
So it can be used to set up separate environments which is a nice thing so that
installed programs deps don't conflict with each other.

Installing conda:
```console
$ sudo dnf install conda
```
Next we create a conda environment for development:
```console
$ conda create -y -n QiskitDevEnv python=3
```
Then we can activate this newly created environment using:
```console
$ conda activate QiskitDevEnv
```
To deactive:
```console
$ conda deactivate
```
Install dev deps:
```console
$ sudo pip install -r requirements-dev.txt
# pip install conan
$ sudo dnf install openblas-devel 
$ sudo dnf install openblas-static
$ sudo dnf install libgfortran-static


Building as a standalone executable:
```console
$ mkdir out && cd out
$ cmake ..
$ cmake --build . --config Release -- -j8
```
```console
$ file Release/qasm_simulator 
Release/qasm_simulator: ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=b8a30ab828bed5f736f4cfea8dc0396884eb08bc, for GNU/Linux 3.2.0, with debug_info, not stripped
$ ldd Release/qasm_simulator 
	linux-vdso.so.1 (0x00007ffff7fcf000)
	libopenblas.so.0 => /usr/lib64/libopenblas.so.0 (0x00007ffff5cc0000)
	libdl.so.2 => /usr/lib64/libdl.so.2 (0x00007ffff5cb9000)
	libpthread.so.0 => /usr/lib64/libpthread.so.0 (0x00007ffff5c97000)
	libstdc++.so.6 => /usr/lib64/libstdc++.so.6 (0x00007ffff5a9e000)
	libm.so.6 => /usr/lib64/libm.so.6 (0x00007ffff5958000)
	libgomp.so.1 => /usr/lib64/libgomp.so.1 (0x00007ffff591e000)
	libgcc_s.so.1 => /usr/lib64/libgcc_s.so.1 (0x00007ffff5902000)
	libc.so.6 => /usr/lib64/libc.so.6 (0x00007ffff5739000)
	libgfortran.so.5 => /usr/lib64/libgfortran.so.5 (0x00007ffff5497000)
	/lib64/ld-linux-x86-64.so.2 (0x00007ffff7fd1000)
	libquadmath.so.0 => /usr/lib64/libquadmath.so.0 (0x00007ffff544d000)
```
After building we can verify that we can run the simulator using:
```console
$ ./Release/qasm_simulator src/qobj-simulator-example.input > output
```

So to be able to run this completely in a browser we need to be able to
statically link it.


Building with debug symbols:
```console
$ cmake -DCMAKE_BUILD_TYPE=Debug ..
$ make -j8
```

### Try with emscripten
```console
$ git clone https://github.com/emscripten-core/emsdk.git
$ cd emsdk
$ ./emsdk install latest
$ ./emsdk activate latest
$ source ./emsdk_env.sh
```


