## Learning Quantum computing
This project only exists to help me learn about quantum computing


### Vector notation
I'm used to seeing a vector named a_hat (with a ^ above the label) but there
is a different notation that seems to be used in quantum mechanics which is
```
a_hat = |a>
```
Notice the usage of brackets which is why it is called `bra-ket` or `Dirac` notation.
Remember that what is inside the brackets is just a label for the vector and can
be anything (even a number).

Addition of vectors:
```
|a> + |b> = |c>
```
Multiplication of vectors:
```
a|a> = |d>
```

Now, I've been thinking about vectors as having both magnitude (length) and
direction, like an arrow. Like this is how we imagine them being added/scaled etc.
But that is just one particular vector space (euclidian vectors) and it might not be helpful in a 
different vector space such as in quantum mechanics.
In quantum mechanics we can have imaginary numbers which are multipied with vectors.
Perhaps this is the reason for the different notation as well, to separate them?

So when you see a vector like:
```
One bit with the value zero:                                     
|0> in Dirac notation you can think (1 0) 

One bit with the value one:
|1> in Dirac notation you can think (0 1)
```
It might help to think of the Dirac notation as an array index by the label 
inside. For example, |0> means that there will be a one at index 0, |1> means
that there will be a one in index 1.


### Quantum bits
A qbit can take on a value of either 0 or 1 just like a normal bit. They can 
be represented phycically as:
* The spin of a particle in a magnetic field where up means 0 and down means 1
* The polarization of a single photon where horizontal polarization means 1
  and vertical polarization means 0. So this is bascically building the computer
  using light.

Qbits are sometimes visualized using a shape that looks like a sphere and called
the Bloch sphere:
```
                ^ z      
                | 
                |0>
                |
                |
                -------------------------> y
              / |
             /  |
           x/   |
                |1>
```

### Superposition
Imagine having a coin that when in the air is in both heads or tail state, like
if you could see it in mid air you would see both states. But as soon as it lands
it will be either 0 or 1 as the superposition collapses. The wave function gives
a probability of if the outcome will be 0 or 1 but that is only a probability, it
does not tell you for certain the outcome (unless it the probability is 0 or 1 
I guess).

So a classic bit can store either a 0 or a 1.
A qbit can store a 0 and a 1 at the same time (2¹ = 2)

A 2-bit classic computer can store store:
```
00
01
10
11
```
But only one of these states (0, 1, 2, 3).
A 2-bit qbit can store 2² = 4 values simultaneously. So it can store 0, 1, 2 3
at the same time. But this is under the asumption that we don't inspect the 
value as it would then collapse and only be in of state would it not?
How do the qbits get used in algorithms, I'm obviously missing something here?

### Gates
Just like the not, and, or xor, nand etc gates in classical computers there are
gates in quantum computers as well. These gates are operate on a set of inputs
and produce a set of outputs. But they can operate on all the states of the qbit
as the same time.

Classic gates:
Is a component that receives two incoming electric currents, compares them, and
sends on a new outgoing electric current depending on the comparision made.

#### Measurement gate
This gates takes a qbit in superposition as input and outputs either 0 or 1.
I think the wave function is used to get a probability of if the output will be
0 or 1.
As measuring/observing a qbit alters it state this should be the last act on a 
quantum curcuit.

#### Swap gate
Takes 2 qbits and swaps there states.


Representing classical bits as a vector:
One bit with the value 0:
```
(1
 0)
```
This can also be written in Dirac vector notation as: |0>
One bit with the value 1:
```
(0
 1)

|1>
```

If we think of this as a vector originating from the origin (0) then the
0 will be along the x axis, really a unit on it. And 1 will be a unit in the
y axis and x will be zero.

Quantum computing uses these vectors (and later matrixes) just like a normal
computer would use bits and bytes.

Notice in the following where multiplying a matrix with a vector flips the
to middle bits:
```
(1 0 0 0   (0      (0
 0 0 1 0    1    =  0
 0 1 0 0    0       1
 0 0 0 1)   0)      0)
```

There are 4 operations on a single bit:
```
1) Set it to 1
2) Set it to 0
3) Negate/Not~
4) Identity (multiplied by 1)
```

Identity:
```
f(x) = x    0 -> 0     (1 0  (1   = (1        (1 0  (0   = (0
            1 -> 1      0 1)  0)     0)        0 1)  1)     1)
```
Is reversable. If we know the outcome and the operation we can reverse this.
Notice that the transformation comes first which in this case is the identity
matrix, and the input which is the vector.

Negation:
```
f(x) = ¬x   0 -> 1     (0 1  (1   = (0        (0 1  (0  = (1
            1 -> 0      1 0)  0)     1)        1 0)  1)    0)
```
Is reversable. If we know the outcome and the operation we can reverse this.

Constant-0
```
f(x) = 0    0 -> 0     (1 1  (1  = (1*1 + 0*1  = (1     (1 1  (0   = (0*1 + 1*1  = (1
            1 -> 1      0 0)  0)    1*0 + 0*0)    0)     0 0)  1)     0*0 + 0*1)    0)
```
Is not reversable. If we know the outcome and the operation we still can't know
the input value, it would be either 0 or 1.

Constant-1
```
f(x) = 1    0 -> 1    (0 0  (1  = (0         (0 0  (0  = (0
            1 -> 1     1 1)  0)    1)         1 1)  1)    1)
```
Is not reversable. If we know the outcome and the operation we still can't know
the input value, it would be either 0 or 1.

Quantum computers only use reversable operations.
Also all operations are there own inverse, so if you apply the operation twice
you get back the input value.


### Controlled NOT (CNOT)
This is a gate that operators on a pair of bits, one which is the control bit
and the other the target bit. If the control bit is 1 then the target bit is
flipped. And if the control bit is 0 then the target bit is left unchanged.
The control bit is never updated.

```
condition/control matrix:
C = ( 1 0 0 0  )
      0 1 0 0
      0 0 0 1
      0 0 1 0


                            1 0 0 0     0       0
C|10> = C((0 1) x (0 1) = ( 0 1 0 0 ) ( 0 ) = ( 0 ) = (0 1) x (0 1) = |11>
                            0 0 0 1     1       0
                            0 0 1 0     0       1
```

A qbit is represented by (a b) where a and b are complex numbers and
```
||a²|| + ||b²|| = 1
```
Examples qbit values:
```
  1
( -
  √2
               (1/√2)² + (1/√2)² = 0.7071067812² + 0.7071067812² = 0.5 + 0.5 = 1
  1
  -
  √2 )

  1
( -
  2
               (1/2)² + (√3/2)² = 0.25 + 0.8660254038² = 0.25 + 0.75 = 1
  √3
  -
  2  )

( -1           -1² + 0² = 1 + 0 = 1
  0  )


```

