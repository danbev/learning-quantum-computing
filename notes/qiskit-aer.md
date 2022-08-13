### qiskit-aer

### Building
```console
$ cd qiskit-aer
$ conda create -y -n QiskitDevEnv python=3
$ conda activate QiskitDevEnv
```
This environment can be deactivated using:
```console
$ conda deactivate
```
Install all the dependencies:
```console
(QiskitDevEnv) $ pip install -r requirements-dev.txt 
```

We can also build a standalone version:
```console
$ mkdir out
$ cd out
$ cmake..
...
-- Conan executing: /home/danielbevenius/.local/bin/conan install . -s build_type=Release -s compiler=gcc -s compiler.version=11 -s compiler.libcxx=libstdc++11 -e=CONAN_CMAKE_PROGRAM=/home/danielbevenius/.local/lib/python3.10/site-packages/cmake/data/bin/cmake -g=cmake --build=missing
ERROR: Invalid setting '11' is not a valid 'settings.compiler.version' value.
Possible values are ['4.1', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5', '5.1', '5.2', '5.3', '5.4', '5.5', '6', '6.1', '6.2', '6.3', '6.4', '6.5', '7', '7.1', '7.2', '7.3', '7.4', '7.5', '8', '8.1', '8.2', '8.3', '8.4', '9', '9.1', '9.2', '9.3', '10', '10.1']
Read "http://docs.conan.io/en/latest/faq/troubleshooting.html#error-invalid-setting"
```
I updated Conan but still ran into this issue, but this was due to a stale
setting.xml in `~/.conan/setting.yml`. Removing this file allowed the
configuration of cmake to succeed:
```console
$ rm ~/.conan/settings.yml
```
After that I ran into the following issue:
```console
CONAN_CMAKE_PROGRAM=/home/danielbevenius/.local/lib/python3.10/site-packages/cmake/data/bin/cmake
spdlog/1.9.2: Not found in local cache, looking in remotes...
spdlog/1.9.2: Trying with 'conan-center'...
spdlog/1.9.2: WARN: Remote https://conan.bintray.com is deprecated and will be shut down soon.
spdlog/1.9.2: WARN: Please use the new 'conancenter' default remote.
spdlog/1.9.2: WARN: Add it to your remotes with: conan remote add -i 0 conancenter https://center.conan.io
ERROR: HTTPSConnectionPool(host='conan.bintray.com', port=443): Max retries exceeded with url: /v1/ping (Caused by SSLError(SSLError(1, '[SSL: WRONG_VERSION_NUMBER] wrong version number (_ssl.c:997)')))

Unable to connect to conan-center=https://conan.bintray.com
1. Make sure the remote is reachable or,
2. Disable it by using conan remote disable,
Then try again.
CMake Error at cmake/conan.cmake:402 (message):
  Conan install failed='1'
Call Stack (most recent call first):
  cmake/conan.cmake:497 (conan_cmake_install)
  cmake/conan_utils.cmake:71 (conan_cmake_run)
  cmake/dependency_utils.cmake:20 (setup_conan)
  CMakeLists.txt:145 (setup_dependencies)
```
This was caused by a stale url in `remotes.json`:
```console
$ vi ~/.conan/remotes.json 
```
Updating the `url` to `https://center.conan.io` fixed this issue:
```json
   "url": "https://center.conan.io",
```

Then we can build using:
```console
$ cmake --build . --config Release -- -j4
```

### Building with c++ tests
```console
$ cmake -DBUILD_TESTS=True ..
$ make -j8 test
```

### Running tests
The project uses [tox](https://tox.readthedocs.io/en/latest/) so it needs to
be installed:
```console
$ sudo pip install tox
```

Then the tests are run using the `tox` command:
```console
$ tox
```
This will run a number of tests and I think it does so in multiple environments.
For simple C++ code updates hopefully using -DBUILD_TESTS=True will allow for a
faster development cycle.


### compiler warnings
```console
In file included from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/controller.hpp:54,
                 from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/qasm_controller.hpp:18,
                 from /home/danielbevenius/work/quantum/qiskit-aer/contrib/standalone/qasm_simulator.cpp:25:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp: In member function ‘virtual void AER::Transpile::CacheBlocking::optimize_circuit(AER::Circuit&, AER::Noise::NoiseModel&, const opset_t&, AER::ExperimentResult&) const’:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp:208:21: warning: comparison of integer expressions of different signedness: ‘AER::Transpile::uint_t’ {aka ‘long unsigned int’} and ‘int’ [-Wsign-compare]
  208 |     for(uint_t i=0;i<qubits_;i++){                                      
      |                    ~^~~~~~~~
```

This is what the for loop looks like:
```c++
    for(uint_t i=0;i<qubits_;i++){                                              
      qubitMap_[i] = i;                                                         
      qubitSwapped_[i] = i;                                                     
    }
```
Notice that `i` is of type `uint_t` which is an unsigned int type while `qubits_`
is of type int. 
```c++
  mutable int qubits_;
```
Since the code is iterating over all the qubits_ we could just as well use
`int_t` the type of `i`. 


```console
In file included from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/controller.hpp:54,
                 from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/qasm_controller.hpp:18,
                 from /home/danielbevenius/work/quantum/qiskit-aer/contrib/standalone/qasm_simulator.cpp:25:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp: In member function ‘void AER::Transpile::CacheBlocking::define_blocked_qubits(std::vector<AER::Operations::Op>&, AER::Transpile::reg_t&, bool) const’:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp:229:29: warning: comparison of integer expressions of different signedness: ‘std::vector<long unsigned int>::size_type’ {aka ‘long unsigned int’} and ‘int’ [-Wsign-compare]
  229 |     if(blockedQubits.size() >= block_bits_)                             
      |        ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~                              
```
So we have `blockedQubits` which is of type `req_t` which can be found in
`src/framework/types.hpp`:
```c++
using reg_t = std::vector<uint_t>;

```
The vector size() function returns an unsigned int. But then we want to compare
this value to the int block_bits_. 
```c++
mutable int block_bits_;    //qubits less than this will be blocked
```

So size and block_bits could be anything in the ranges:
```
size       :              0 -> 4294967295
block_bits : -2,147,483,648 -> 2147483647.
```
The check looks like this:
```c++
      if(blockedQubits.size() >= block_bits_)                                     
        break;   
```
So this is checking the the number of elements/size of the vector with the
number of blocked_bits_, and if the size is greater than or equal to the
block_bits_ then break out of the loop. Now the problem is that while blockedQubits.size() can only be a
positive number block_bit_ could be a negative value. 

So lets say that the size for the vector is 10, and block_bits_ for some reason
is -1. How do we safely compare there values. We can't cast -1 to an unsigned
int as that would become 4294967295 will probably be larger than the size of the
vector and the above is statement would be true. But is we know that block_bits
is a positive value we can safely cast it to an unsigned value.

If we first check block_bits_ then we can cast it to an unsigned int as it will
fit (the largest possible positive value would be 2,147,483,647 and the max limit
for an unsigned int is 4294967295). And what we are interested in the code is
if the blockedQubits.size() is greater or equal to blocked_bits, and if blocked_bits_
is negative then it is greater for sure.
```c++
    if(block_bits_ > 0 && blockedQubits.size() >= static_cast<unsigned int>(block_bits_))
        break; 
```

Next warning, also in src/transpile/cacheblocking.hpp:
```console
In file included from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/controller.hpp:54,
                 from /home/danielbevenius/work/quantum/qiskit-aer/src/controllers/qasm_controller.hpp:18,
                 from /home/danielbevenius/work/quantum/qiskit-aer/contrib/standalone/qasm_simulator.cpp:25:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp: In member function ‘void AER::Transpile::CacheBlocking::define_blocked_qubits(std::vector<AER::Operations::Op>&, AER::Transpile::reg_t&, bool) const’:
/home/danielbevenius/work/quantum/qiskit-aer/src/transpile/cacheblocking.hpp:238:18: warning: comparison of integer expressions of different signedness: ‘AER::Transpile::uint_t’ {aka ‘long unsigned int’} and ‘int’ [-Wsign-compare]
  238 |         for(j=0;j<nq;j++){                                              
      |                 ~^~~  
```
We can see the types below:
```c++
   uint_t i,j,iq; 
   int nq;
   ...

          for(j=0;j<nq;j++){                                                         
            if(ops[i].qubits[iq] == blockedQubits[j]){                               
              exist = true;                                                          
              break;                                                                 
            }                
```
We can see that j is of type uint_t and nq is of type int and we are comparing
if the unsigned in is less than the int nq.


Notice this line:
```c++
  int nq;
  ...
  nq = blockedQubits.size();
```
Now this will do an implict cast, and if the size if larger than 2147483647
nq will become a negative value. This value will later be used to check the
j value which is an unsigned value:
```c++
          for(j=0;j<nq;j++){                                                        
            if(ops[i].qubits[iq] == blockedQubits[j]){                               
              exist = true;                                                          
              break;                                                                 
            }                                                                        
          }         
```
So lets say that the `blockedQubits.size()` for some reason is 2147483648 which
would be -2147483648 and j=0, in this case the loop will not be entered which I
don't think is the intention.

Take this example:
```c
#include <assert.h>                                                             
                                                                                   
int main(int argc, char** argv) {                                                  
  unsigned int u = 10;                                                             
  int s = -1;                                                                      
  int r = 0;                                                                       
  if (u > -1) {                                                                    
    r = 1;                                                                         
  } else {                                                                         
    r = 2;                                                                         
  }                                                                                
  //assert(u > -1);                                                                
                                                                                   
  return 0;                                                                        
```

```console
(lldb) expr -f b -- (unsigned int) s
(unsigned int) $4 = 0b11111111111111111111111111111111
(lldb) expr -f i -- (unsigned int) s
(unsigned int) $5 =
(lldb) expr -- (unsigned int) s
(unsigned int) $6 = 4294967295
(lldb) expr -- u > (unsigned int) s 
(bool) $7 = false
(lldb) expr -- (unsigned int) u
(unsigned int) $8 = 10
```
An expression that has an unsigned int will implicitly convert the int to
an unsigned in which in the case of a negative value will become
2⁸ + negative_number:
```
2³²-1 + (-1) = 4294967295
```
```console
(lldb) expr (unsigned int) -1
(unsigned int) $10 = 4294967295
(lldb) expr (unsigned int) -2
(unsigned int) $11 = 4294967294
(lldb) expr (unsigned int) -3
(unsigned int) $12 = 4294967293
(lldb) expr (unsigned int) -4
(unsigned int) $13 = 4294967292
```
Looking at this again I guess another option would be to make `block_bits_`,
`qubits_`. and `gpu_blocking_bits_` uint_t in the CacheBlocking class.


Another warning src/simulators/statevector/statevector_state_chunk.hpp:
```console
template <class statevec_t>                                                         
template <class T>                                                                  
cmatrix_t State<statevec_t>::vec2density(const reg_t &qubits, const T &vec) {    
  const size_t N = qubits.size();                                                   
  const size_t DIM = 1ULL << N;                                                     
  auto qubits_sorted = qubits;                                                      
  std::sort(qubits_sorted.begin(), qubits_sorted.end());                            
                                                                                    
  // Return full density matrix                                                     
  cmatrix_t densmat(DIM, DIM);                                                      
  if ((N == BaseState::num_qubits_) && (qubits == qubits_sorted)) {                 
    const int_t mask = QV::MASKS[N];                                                
#pragma omp parallel for if (2 * N > omp_qubit_threshold_ &&                   \
                             BaseState::threads_ > 1)                          \
    num_threads(BaseState::threads_)                                  
```
Notice that N is an long unsigned int, and it is being compared with
omp_qubity_threshold (omp=OpenMP) which is an int:
```c++
int omp_qubit_threshold_ = 14; 
```
It does not look like this value could ever be less than zero so perhaps it
can be changed into `uint_t`?  

Another warning this time in src/simulators/density_matrix/densitymatrix_state_chunk.hpp:
```console
/home/danielbevenius/work/quantum/qiskit-aer/src/simulators/density_matrix/densitymatrix_state_chunk.hpp:1037:25: warning: comparison of integer expressi     ons of different signedness: ‘AER::int_t’ {aka ‘long int’} and ‘const size_t’ {aka ‘const long unsigned int’} [-Wsign-compare]
1250  1037 |     for (int_t i = 0; i < VDIM; ++i) {                                  
1251       |                       ~~^~~~~~   
```
The index (i) can be changed to uint_t as VDIM is also unsigned.


```console
/home/danielbevenius/work/quantum/qiskit-aer/src/simulators/density_matrix/densitymatrix_state_chunk.hpp:584:6:   required from here
/home/danielbevenius/work/quantum/qiskit-aer/src/simulators/density_matrix/densitymatrix_state_chunk.hpp:1014:22: warning: comparison of integer expressions of different signedness: ‘AER::int_t’ {aka ‘long int’} and ‘AER::uint_t’ {aka ‘long unsigned int’} [-Wsign-compare]
 1014 |   for(iChunk=1;iChunk<BaseState::num_local_chunks_;iChunk++){           
      |                ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~   
```


```console

```

### Testing
```console
env CTEST_OUTPUT_ON_FAILURE=1 make test
```


### MPI
```console
$ sudo yum install openmpi-devel.i686
$ export PATH=/usr/lib64/openmpi/bin:$PATH
```
Without setting the PATH I got the following error when configuring:
```console
-- Could NOT find MPI_C (missing: MPI_C_LIB_NAMES MPI_C_HEADER_DIR MPI_C_WORKS) 
-- Could NOT find MPI_CXX (missing: MPI_CXX_LIB_NAMES MPI_CXX_HEADER_DIR MPI_CXX_WORKS) 
CMake Error at /usr/local/lib64/python3.7/site-packages/cmake/data/share/cmake-3.18/Modules/FindPackageHandleStandardArgs.cmake:165 (message):
  Could NOT find MPI (missing: MPI_C_FOUND MPI_CXX_FOUND)

      Reason given by package: MPI component 'Fortran' was requested, but language Fortran is not enabled.  

Call Stack (most recent call first):
  /usr/local/lib64/python3.7/site-packages/cmake/data/share/cmake-3.18/Modules/FindPackageHandleStandardArgs.cmake:458 (_FPHSA_FAILURE_MESSAGE)
  /usr/local/lib64/python3.7/site-packages/cmake/data/share/cmake-3.18/Modules/FindMPI.cmake:1721 (find_package_handle_standard_args)
  CMakeLists.txt:304 (find_package)


-- Configuring incomplete, errors occurred!
```
Now we should be able to configure using `AER_MPI`:
```console
$ mkdir build && cd build
$ cmake .. -DBUILD_TESTS=True -DAER_MPI=True
```
