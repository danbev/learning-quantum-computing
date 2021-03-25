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
$ sudo cp ../cmake/FindBLAS.cmake.fix-static-linking /usr/share/cmake/Modules/FindBLAS.cmake
```

Configure:
```console
$ cmake -DSTATIC_LINKING=True ..
```
Build:
```console
$ make
```
I'm getting the following error:
```console
$ make
Scanning dependencies of target qasm_simulator
[ 50%] Building CXX object CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o
c++: error: LINK_FLAGS: No such file or directory
make[2]: *** [CMakeFiles/qasm_simulator.dir/build.make:63: CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o] Error 1
make[1]: *** [CMakeFiles/Makefile2:104: CMakeFiles/qasm_simulator.dir/all] Error 2
make: *** [Makefile:141: all] Error 2
```
If we run make with `-n` we can see the commands it is executing:
```console
$ make -n
make -f CMakeFiles/qasm_simulator.dir/build.make CMakeFiles/qasm_simulator.dir/build
/usr/bin/cmake -E cmake_echo_color --switch= --green --progress-dir=/home/danielbevenius/work/quantum/qiskit-aer/build/CMakeFiles --progress-num=1 "Building CXX object CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o"
ccache /usr/lib64/ccache/c++   -I/home/danielbevenius/work/quantum/qiskit-aer/src -I/home/danielbevenius/work/quantum/qiskit-aer/src/third-party/macos/lib -I/home/danielbevenius/work/quantum/qiskit-aer/src/third-party/win64/lib -I/home/danielbevenius/work/quantum/qiskit-aer/src/third-party/linux/lib -isystem /home/danielbevenius/work/quantum/qiskit-aer/src/third-party/headers  -static -O2 -DNDEBUG   LINK_FLAGS -pthread -std=gnu++14 -o CMakeFiles/qasm_simulator.dir/contrib/standalone/qasm_simulator.cpp.o -c /home/danielbevenius/work/quantum/qiskit-aer/contrib/standalone/qasm_simulator.cpp
```
Notice that `LINK_FLAGS` is missing the `-D` part. It looks like this variable
is missing for a static build. How about adding an empty one?
When configuring an dynamically linked build LINK_FLAGS will be set to `-fopenmp`:
```
	set_target_properties(qasm_simulator PROPERTIES
		LINK_FLAGS ${AER_LINKER_FLAGS}
```
Notice that there are no quotation marks ("") around this variable, so if it is
not set then the `set_target_properties` command will actually be invalid.

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

Building as a standalone executable:
```console
$ mkdir out && cd out
$ cmake ..
$ cmake --build . --config Release -- -j8
```


