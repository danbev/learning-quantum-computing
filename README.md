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
Now take the qbit value (1/2 1/√2):
```
(1/2)² + (√3/2)² = 0.25 + 0.8660254038² = 0.25 + 0.75 = 1
```
When we measure this qbit it will collapse to either 0 or 1 and the probability
in this case is 0.25 that it will be a zero and 0.75 that it will be a one.

Operations on qbit are done by matrix multiplications or transformations. These
seem to be called gates as well but I guess a gate in a circuit is really just 
an operation.

Now, if you imagine (1 0) as being (x, y) then you could produce/draw a unit cirle:
```
                          (0,1)

     (-1/√2,1/√2)                       (1/√2,1/√2)



 (-1,0)                                           (1,0)



   (-1/√2,-1/√2)                        (1/√2,-1/√2)


                          (0,-1) 
```
You an visualize operations using this unit cirlce, for example the bit flip
operation on (1,0) will take you to (0,1), (1/√2, 1/√2) does nothing.
I think that the bitflip operation is denoted with an X.


If complex number were used then you would have to visualize a sphere.


Hadamard gate
```
       1   1
       -   -                  1
       √2  √2      1          -
H|0> (        ) (  0   )  = ( √2 )
       1   -1                
       -   --                 1
       √2  √2                 -
                              √2

```

```
                         (0,1)
                              \
     (-1/√2,1/√2)              \        (1/√2,1/√2)------+
              \                 \                        |
               \                 \                       |
                \                 \                      |
+(-1,0)          \                 \              (1,0)--+
|                 \                 \
|                  \                 \
|                   \                 \
+---(-1/√2,-1/√2)    \                 (1/√2,-1/√2)
                      \
                       \
                        (0,-1) 
```

We can chain operations (like bitflip, hadamard) by sending qbits through them:
```
X = bitflip
H = Hadamard

(1 0) ---> X -----> H --------------> X -------------> H -------> X --------> (-1, 0)
             (0,1)    (1/√2, -1/√2)     (-1/√2,1/√2)     (0, -1)    (-1, 0)
```

In quantum computing all operations must be reversable (why is that?). But with
a single bit setting it to zero or one is not reversible. 
For example, say you have 0 and constant-0 it, the input could have been 1 or
zero and we don't know which. 
```
                  +---+
output |0> -------|   |-----> |0> output'
                  |BB |
input  |x> -------|   |-----> |x> input'
                  +---+
```


### Entanglement
If the product state of two qbits cannot be factored they are said to be entangled.
What does that mean?  
We want to take a vector and factor out the products of it.
```
x in this case is the tensor product operator. Should be an x with a circle around it.

                 x₀y₀
 (x₀) x (y₀) = ( x₀y₁ )
  x₁     y₁      x₁y₀
                 x₁y₁
```

Working backwards, notice that we "should" be able to factor the product state into tensor product multiplications but this is not possible, there is no solution for these values:
```
                       a * c should be 1/√2
  1        a      c    a * d should be 0
( -  ) = ( b ) x (d) = b * c should be 0
  √2                   b * d should be 1/√2
  0      

  0
  1
  -
  √2
```
So it is not possible to separete the qbit that make up this product state, they
have no individual value, the value only makes sense together.
```
(1/√2)² + 0   = 0.5
0² + (1/√2)²  = 0.5
              = 1.0
```
So this super state has a 50% of collapsing to 0 and 50% of collapsing to 1. So
both qbits take part in the determining the outcome of 0 or 1. So if we measured
one of these qbits and we get |0> we know the other must also be |0>, likewise if
we measure one and get |1> we know that the other must also be |1>. This is me trying
to explain this so I could be way off (which is very likely).
Measureing on qbit instantly collapses the other.

Remember that there is a physical qbits in there somewhere which are in this
state together. So in a quantum computer these qbits would be realized as hardware
in someway utilizing something from quantum mechanics which allows a qbit to be
represented (photons are possible but it sounds like it is not very convienient to
do so as it requires very cold temperatures). The strange thing is that if we 
move these qbits apart from one another, even large distances, this will still 
work. How is this possible? I don't think anyone knows but there is no information
sent as this happens faster than the speed of light. There was a theory about
named hidden variable that was about there being hidden information in the qbit
so it knows what it's outcome should be. TODO: try to understand the Bell experiment
on this which should prove that the hidden variable theory is incorrect.
But how does this work then? This is very interesting and got me thinking about
a lecture by Leanard Susskind and about the world as a hologram where all inforation 
was stored in someway separated from the actual 3d world we are in. In this case
perhaps the information is stored there and there is no communication needed at
all.

This how we entangle qbits:

```                 (CNOT)
|0> ------------------X-------
         +---+        |
|0> -----| H |--------*-------
         +---+
       (Hadamard) 
                       Hadamard                CNOT
                                              1 0 0 0   1/√2      1/√2
CH₁((1 0) x (1 0)) = C(1/√2 1/√2) x (1 0)) = (0 1 0 0) (0    ) = (0    )
                                              0 0 0 1   1/√2      0
                                              0 0 1 0   0         1/√2
```

The measurement gate takes a qubit in a superposition of states as input and 
spits either a 0 or 1.

Regarding this probability, I was wondering how we can compute using it, I mean
there is no guarantee that we find a value i a particular state even though the
probability is high. Right, but if you have many particles they you can use
the probability. Hmm, so is a single qbit implemented using multiple particles 
then or how does that work.

Measurement.
We have learnt that measuring the state will collapse the wave function and this
happens all the time to particules when they get hit by light or other interaction. 
This is why we don't see thing in superposition state in everyday life and also
why it is so hard to create a quantum computer. They need to isolate the particle
to avoid interference with the outside environment. 

The coefficients in the wave function can be complex numbers, for example:
```
|Ψ> = d+ei|state1> + ...

d = real number
e = number of units in the imaginary dimension
```

#### Swap Gate
Takes 2 qbits and swaps their state.
```  
     1 0 0 0
S = (0 0 1 0)
     0 1 0 0
     0 0 0 1


#### Pauli or X Gate
Similar to a NOT gate in classical computing. This will rotate the qbit 180 degrees
along the x-axis.
It is named after Wolfgang Ernst Pauli who won the nobel prize in 1945.
```
|0> -> |1>
|1> -> |0>
```

#### Rotation Gates (Pauli Y and Pauli Z)

```
Y = (0 -i)
     i 0
```

#### Toffoli (CCNOT)


So a quantum gate manipulates the input of superpositions, rotates probabilities, 
and produces another superposition as its output.


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


#### Superconductor
The great thing about superconductors is that electricity flows without any loss, 
so a current in a close loop can theoretically flow forever.
In a qubit made of a superconductor loop, a current oscillates back and forth 
around a loop. A microwave is injected which excites the current into a superposition of states
This design is used by IBM’s cloud platform Q Experience which is the basis for 
the code used in this book. It is also used by Google and a private venture called 
Quantum Circuits, Inc. (QCI)

#### Interference
Observables are properties of an object that we can measure, for example the objects
position, it's speed, it's spin. etc.
In quantum mechanics an object in superposition is said to have all the possible
measurements at the same time.
For a normal everyday object just knowing the object position does not say anything
about the objects speed. The position of the object is said to be independant of the
speed.
If we have a particle and want to know its position the best we can do is use the
wave function to get a probability of the particles position:
```
|Ψx> = a|x₁> + b|x₂> + c|x₃ + ...

where x is a set of all the different possitions.
```
Lets say we are also interested in the objects speed. Again we only have the wave
function so it must be in the superposition just like the property x (position).
In quantum mechanics x and y are not independant, instead you can actually get the
probability of y using x!
"There is only one wave function and it knows everything there is to know about the
particle"
We can write the wave function with whatever observable we want:
```
|Ψ> = 
    = a|x₁> + b|x₂> + c|x₃ + ...
    = a|y₁> + b|y₂> + c|y₃ + ...
```


#### Spin
The observables in an electron are the up/down spin and the right left spin.
```
|ψ> = a₁|up> + a₁|down>

|ψ> = √1/4|up> + √3/4|down>
```
Being up/down I think refers to how the electromagnetic field behaves around
the particle. The concrete example above still means that the probability is either
up or down, not that we would ever measure it as 3/4 down or 1/4 up.
With just the up/down we can calculate the probability for left/right.
Convert up/down to left/right:
```
|ψ> = a₁|up> + a₁|down>
|ψ> = a₁|left> + a₁|right>
The coefficients stay the same.

|ψ> = √1/4|up> + √3/4|down>
|ψ> = √1/4|up> + √3/4|down>
```
A particle that is either up/down should not be pointing either left or right. 
Think of a bar magnet in this case to visualize this. So in that case left/right
are equally probable 50/50.
```
|up>   = √1/2|right> + √1/2|left>
|down> = √1/2|right> - √1/2|left>
```
The electrons don't actually spin but are magnetic. It was first though that the
particle were spinning around their own axis but this turned out to be wrong.

#### De Broglie Hypothesis
"Matter is a wave as well as a particle.
```
     h
λ =  -
     P
```
