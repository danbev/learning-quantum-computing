### qiskit-aer


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
Now this will to an implict cast and if the size if larger than 2147483647
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
So lets say that the size for some reason is 2147483648 which would be
-2147483648 and j=0, in this case the loop will not be entered which I don't
think is the intention.

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
