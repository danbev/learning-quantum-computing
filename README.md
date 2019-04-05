## Learning Quantum computing
This project only exists to help me learn about quantum computing

### Vector notation
I'm used to seeing a vector named a_hat (with a ^ above the label) but there
is a different notation used in quantum mechanics which is:
```
a_hat = |a>
```
Notice the usage of brackets which is why it is called `bra-ket` or `Dirac` notation.
Remember that what is inside the brackets is just a label for the vector and can
be anything (even a number).

The ket is just the pipe symbol and the less-than around the symbol and means 
that we are dealing quantum state represented by a column vector:
```
|0> ket ⌈1⌉            "zero-ket"
        ⌊0⌋

|1> ket ⌈0⌉           "one-ket"
        ⌊1⌋
```
The bra part is `<0|` the opposite of ket and is a row vector:
```
<0| bra [1 0]
<1| bra [0 1]
```
Bascially the notation was invented to separate column vectors from row vectors.
Also if you specify `<a|b>` this means to perform the dot product operation.

Notice that |0> and |1> are very similar to the basis vectors in physics:
```
i_hat = ⌈1⌉
        ⌊0⌋

j_hat = ⌈0⌉
        ⌊1⌋

```
These form a basis (you can reach any point in R²) by using linear combinations
(scaling and adding). Not sure if this is signifcant at all but though it was
interesting.

```
α|0> + β|1>      α, β ∈ Complex number set
                 |α|² + |β|² = 1   (unit vector as the lengths are 1)

We can stack these:
⌈α⌉
⌊β⌋
```
This gives us a two-dimensional vector in a complex vector plane.
So α and β are the scalars and the |0> and |1> the basis unit vectors when you
see:
```
α|0> + β|1>
```
it means that we are scaling these unit vectors by those complex numbers:
```
                  ^
            ⌈0⌉|1>-
            ⌊1⌋   |
                  |   
                  |   
           ---------------|---> 
                          |0>⌈1⌉
                             ⌊0⌋  
```
All of the vectors produced must fit on the unit circle (have a radius of 1). So
we can use the values specified on the unit circle to produce vectors. For
example a 45 degree vector would be specified using:
```
√2/2⌈1⌉ + √2/2⌈0⌉ = ⌈√2/2⌉ = ⌈0.707106⌉
    ⌊0⌋       ⌊1⌋   ⌊√2/2⌋   ⌊0.707106⌋
or 
√2/2|0> + √2/2|1> = ⌈√2/2⌉ = ⌈0.707106⌉
                    ⌊√2/2⌋   ⌊0.707106⌋
```

```
                π/2
          |1>   ^
                |      / |Ψ>
                |    / 
                |  /
                |/ ) Θ
                +------------>
                            |0>

|Ψ> = cos(Θ)|0> + sin(Θ)|1> = ⌈cos(Θ)⌉
                              ⌊sin(Θ)⌋

Using the above example of 45 degrees we get:
cos(45)|0> + sin(45)|1> = ⌈0.707106⌉
                          ⌊0.707106⌋

When we measure:
|0> with probability cos(Θ)²
|1> with probability sin(Θ)²
```
Keep in mind that after we have measured the actual vector has no changed which
is what is meant it collapsing.

### Tensor product
```
X = tensor product
|00>   q[0] = ⌈1⌉   q[1] = ⌈1⌉
              ⌊0⌋          ⌊0⌋

              ⌈1 ⌈1⌉ ⌉     ⌈1⌉
              |  ⌊0⌋ |     |0|
q[1] X q[0] = |      |   = |0|
              |0 ⌈1⌉ |     ⌊0⌋
              ⌊  ⌊0⌋ ⌋

|01>   q[0] = ⌈0⌉   q[1] = ⌈1⌉
              ⌊1⌋          ⌊0⌋

              ⌈1 ⌈0⌉ ⌉     ⌈0⌉
              |  ⌊1⌋ |     |1|
q[1] X q[0] = |      |   = |0|
              |0 ⌈0⌉ |     ⌊0⌋
              ⌊  ⌊1⌋ ⌋

|10>   q[0] = ⌈1⌉   q[1] = ⌈0⌉
              ⌊0⌋          ⌊1⌋

              ⌈0 ⌈1⌉ ⌉     ⌈0⌉
              |  ⌊0⌋ |     |0|
q[1] X q[0] = |      |   = |1|
              |1 ⌈1⌉ |     ⌊0⌋
              ⌊  ⌊0⌋ ⌋

|11>   q[0] = ⌈0⌉   q[1] = ⌈0⌉
              ⌊1⌋          ⌊1⌋

              ⌈0 ⌈0⌉ ⌉     ⌈0⌉
              |  ⌊1⌋ |     |0|
q[1] X q[0] = |      |   = |0|
              |1 ⌈0⌉ |     ⌊1⌋
              ⌊  ⌊1⌋ ⌋
```

### Spin

So, a particle has a spin in that it can spin like the earth but in any direction.
How can this be represented with a matrix?  
The answer is to use complex numbers. This is the point of the Bloch sphere I
think, to have a visual representation of the spin. If we did not have complex number
we would only be able to rotate in a two dimentional plane.

### Magnitude 
If we have a normal vector (3 4) then we can calculate the length using:
```
length = √(3²+4²) = 5
```
When we have qubits we talk about magnitude instead. Say we have the following:
```
5 + i
magnitude = √(5² + 1²)
          = √(25 + 1)
          = √26
```
Notice that i is not used when calculating the magnitude/length
```
5 = 0i
magnitude = √5²
          = 25
          = 5
```

Now take the following number:
```
3 + 4i
magnitude = √(3² + 4²)
          = √(9 + 16)
          = √25
          = 5
```
Both have the same magnitude?

Just remember that `i² = -1`. This is just per definition (something that is made up
to be this way to fit calculations/obervations).

### Superposition
A qubit is represented by a 2d vector space of the complex numbers C². So far we
have only been using real numbers. So a qubit can be in one of the following
states:
```
|0>
|1>
|ψ>
```
The superposition state can be specified as:
```
|ψ> = α|0> + β|1>
```
Where α and β are complex numbers which together obey:
```
|α|² + |β|² = 1
```

Using polar notation this would be:
```
          0           0
|Ψ> = cos - |0> + sin -  e^iΦ|1>
          2           2

```
The first number can be visualized as the Z component and an increase in 
this number will increase the angle from the north pole outwards. That angle can
go up to π (180 degrees). π/2 is half and would be like 90 degrees, like
a vector pointing somewhere on the equator. In the example above both theta and 
phi are 0 so this is the polar representation for |0>.

Notice that the operation is cosine and cos(0) = 1. So there is no angle and the 
vector is from the origin straight up to the north pole of the sphere. And this 
also means that sin(0) is 0. Also notice that the second part is just that sin(θ/2). 

If we think of this as:
```
           Z
                     sin(θ) or y  
                     \   |
                      \  | cos(θ) or x
                       \ |
                        \|

```
The second term also uses θ, but uses the function sin instead. If you look above
you can see that sine is the part from the tip of the vector to the "north pole".
You can visualize this by rotating the above image side ways so you have horizontally
which I'm more used to. So the first part of the second term is the height/length
of y at the current point. This will increase until it becomes the max (length) of 1 which
is halfway (π/2). It will then decrease until it reaches π where the vector
will be pointing straight down. The imaginary part is where we get the horizontal
rotation around the sphere and Φ is the angle of this rotation.

### Physical Qubits
The physical qubit used in IBM Q is called a superconducting transmon qubit. This
needs to be cooled down to 15 milliKelvin in a dilution refrigirator so that the
is no noise or heat to excite the qubit.

A qubit can take on a value of either 0 or 1 just like a normal bit. They can 
be represented phycically as:
* The spin of a particle in a magnetic field where up means 0 and down means 1
* The polarization of a single photon where horizontal polarization means 1
  and vertical polarization means 0. So this is bascically building the computer
  using light.

### Bloch sphere
Qubits are sometimes visualized using a shape that looks like a sphere and called
the Bloch sphere:
```
                ^ z      
                |0>
                |
                |
                |Θ
                -------------------------> y
              / |Φ
             /  |
           x/   |
                |1>

Θ = theta and is the angle in the vertical axis
Φ = phi is the angle in the x-y plane

          θ                0
|Ψ> = cos - |0> + e^iΦ sin - |1>
          2                2
```
Notice that this is actually saying that the state of qubit can be represented
by two values, theta and phi. And the state is any point on the sphere.

Also note that the X axis is the horizontal axis <---->, y is the axis coming
out towards me, and z is the vertical axis.

Holding a pen to represent `z` helps me a little, and holding it straight up represent
θ = 0. Now can only move to the right down to π (180 degrees). By moving it we 
can stop at different points, and then the Φ angle can be updated to make the top
of the pen point to any location on the sphere at that "height".

θ has to be a value between 0 and π (0 <= θ <= π). So it is cannot be greater than
π (180 degrees).  

Φ has to be a value between 0 and 2π (0 <= 0 <= 2π). So it cannot be greather than
2π (360 degrees).

Recall the unit circle:
```
               π/2
                |       
                |
                |
                |
                |
    π --------------------- 0 and 2π
                |
                |
                |
                |
                |
               3π/2
```


So if we have a zero angle for Θ and for Φ we get:
```
          0                0
|Ψ> = cos - |0> + e^i0 sin - |1>
          2                2
```
Take the first term:
```
cos(0/2) = cos(0) = 1
Which gives:
1|0> = ⌈1⌉
       ⌊0⌋
```
And for the second term we have:
```
e^i0 = 1
sin(0/2) = sin(0) = 0
1 * 0 * |1> = 0

|Ψ> = 1 * |0> + 0 

```
Which is the zero state.

And if we set theta, θ, to π which means that the angle will be 180 degrees so
it will be pointing straight down:
```
          π               π
|Ψ> = cos - |0> + e^i0sin - |1>
          2               2
```
Take the first term:
```
cos(π/2) = 0
Which gives:
0|0> = 0
```
And for the second term we have:
```
e^i0 =  e^(-1 * 0) e^0 = 1
sin(π/2) = 1
|Ψ> = 0 + 1  * 1 |1>
|Ψ> = |1>
```

The reason for theta/2 (θ/2) is that we are working in radians and π is a 180
degrees, and π2 is half way (90 degrees). Recall that this is a limit that is
specified for theta. For Φ (phi) we have a limit of 360 degrees, 2π.

Even though the we are dealing with complex numbers, we are still really working
with coefficients that are scaling some basis vector:
```
        ^
      2 -         * (3,2)
        |
        |
        +---------|-->
                  3
V = 3⌈1⌉ + 2⌈0⌉  = ⌈3 * 1 + 2 * 0⌉ = ⌈3⌉
     ⌊0⌋    ⌊1⌋    ⌊3 * 0 + 2 * 1⌋   ⌊2⌋

--> * 3 = ------>
^          ^
|   * 2 =  |
           |
                      ^
                      |
           ^          |
------> +  |  = ------>
           |
```
The difference is that we cannot choose the coefficients directly, they are give
already but we can specify the angles theta and phi.
If we keep phi as zero and just change theta this is similar to the above example
where scale and add the vectors to get a new vector.


So we can have a 0 or a 1 state depending on if the vector is pointing up or
pointing down. But it call also be pointing anywhere on the sphere, at least
until you measure it, a which point it will collapse into either 0 or 1. In quantum 
computing you measure a qubit with a gate which takes in the superposition vector
and spits out 0 or 1 and the probability of 0 or 1 depends on the state of the
qubit.

How do we using this visualization. One way I've heard is to think of this earth
and latitud, longitude, and amplitude that we use to identify a position on earth.
If we draw a parallel with classical bits they would be like only being able to
be positioned at the south pole or the north pole.
So `|0>` is a vector (1 0) 

There is a good [simulation](https://www.st-andrews.ac.uk/physics/quvis/simulations_html5/sims/blochsphere/blochsphere.html) 
that can be used to get a better feeling for this.

### Phase
A complex number has a magnitude and a phase. Think of the complex number as the
needle of your watch. The angle theta tells us the time, which is known in physics
as the phase.

### Tensor product
```
Ψ₁ = ⌈1⌉
     ⌊0⌋
Ψ₂ = ⌈0⌉
     ⌊1⌋

ψ₁ tensor product Ψ₂:
⌈----------⌉
|  1 * ⌈0⌉ |     ⌈0⌉
|      ⌊1⌋ |  =  |1|
|  0 * ⌈0⌋ |     |0|
|      ⌊1⌋ |     ⌊1⌋
⌊----------⌋
```
The above is how quantum entanglement works. Ψ₁ represents one particle and Ψ₂
a different particle.

You can have combinations of waves:
```
0.5Ψ₁ + 0.5Ψ₂
```
In this case we would have a wave that is 0.5 of the first wave, and
0.5 of the second.
```
Ψ₁ = 1Ψ₁ + 0Ψ₂               ⌈1⌉    <--- the coefficient of Ψ₁
                             ⌊0⌋
|0> in bra-ket notation.
100% Ψ₁ and 0% Ψ₂.
Ψ₂ = 0Ψ₁ + 1Ψ₂               ⌈0⌉
                             ⌊1⌋ <--- the coeffiecient of Ψ₂
|1> in bra-ket notation.
0% Ψ₁ and 100% Ψ₂.
```

Now we will create a graph combining Ψ₁ and Ψ₂:
```
               0.5Ψ₁ + 0.5Ψ₂
```
We want to normalize this equation so that the lenght of these vectors are 1,
so that the quare roots of them become 1 (which they currently do not). We need
to normalize these values which can be done by:
```
            ^
            |
        0.5 -    *
            |
            +----|---->
                0.5
magnitude  = √(0.5² + 0.5²) = √(0.25 + 0.25) = √0.5 = 0.707106
u_hat = (0.5/0.707106, 0.5/0.25) =  (0.707106, 0.707106)
```
Any time you need to normalize you can take the scalar and divide by the magnitude
to the value in the unit vector (value).
```
               0.707Ψ₁ + 0.707Ψ₂
               (√2/2)  + (√2/2)
```
So our vector will look like: (0.707, 0.707) and the graph is says that it 
consists of equal parts of Ψ₁ and Ψ₂. A qubit can be in the state of Ψ₁, or Ψ₂, 
or a combination of both.

Not sure if is significant or not but (√2/2, √2/2) is 45 degrees (π/4) on the 
unit circle.

Since this vector is now normailzed and on the unit circle we can also write
this vector as:
```
|Ψ> = cos(Θ)|0> + sin(Θ)|1> = ⌈cos(Θ)⌉
                              ⌊sin(Θ)⌋
```
Now, sin(θ) could also be written as:
```
sin(Θ) = cos(π/2 - Θ)
```
Using our above example of a (√2/2, √2/2) or (0.707, 0.707):
```
sin(45) = 0.8509
cos(π/2 - 45) = 0.8509
```

And when we measure, the vector will be projected to either the |0> or
|1> (ground or excited state):
```
|0> with probability of cos²(Θ)
|1> with probability of sin²(Θ)
```
This is what a measurement is, a projection onto a standard basis.
Why is this important, well not only can we measure the probability of a projection
onto a standard basis but to any basis that we choose. Remember that |0> and |1> 
are our unit vectors (basis?) but we could use a different vector as our basis(not
sure I've got the terminology right here but I think it makes sense).


In real life we can think of the photon which has a polarisation. For example
the oscillation of the electric field can be horizontal or vertical. 
```
|0> horizontal polarisation. The wave is oscillating horizontally.
|1> vertical polarisation. The wave is oscillating vertically.
|Ψ> would be some other angle of polarisation. For example if it is 45 degrees
    then this would be 1/√2|0> + 1/√2|1>
```
To measure this polarisation we use a filter. I've bought a sheet of this so 
that I can play around with this. I've cut these into 3 small squares and start
by using 2 of them. First I place them one in front of the other and see that
light gets through, nothing is blocked/filtered. The filter is measuring the
oscillation and letting the photons that are osillating vertically through. This would
be them projecting to |0>.

Now, if I rotate one of the filters 90 degress all photons will be blocked. This would
be like the photon projecting/collapsing to |1>. 

If I only rotate say 45 degrees then some will pass and some will be blocked with
a 50/50 probability.

Remeber that after the photon has passed through (if it is not blocked) then it's
new polarisation will be |0>.

### Gates
Just like the not, and, or, xor, nand etc gates in classical computers there are
gates in quantum computers as well. These gates operate on a set of inputs
and produce a set of outputs. But they can operate on all the states of the qubit
as the same time.

There are 4 operations on a single classical bit:
```
1) Set it to 1
2) Set it to 0
3) Negate/Not~
4) Identity (multiplied by 1)
```

An operators is just 2*2 matric and a gate is most often multiple operators
chained together.

#### Classic gates
Is a component that receives two incoming electric currents, compares them, and
sends on a new outgoing electric current depending on the comparision made.

#### Measurement gate
This gates takes a qubit in superposition as input and outputs either 0 or 1.
I think the wave function is used to get a probability if the output will be
0 or 1.
As measuring/observing a qubit alters it state this should be the last act on a
quantum curcuit.

#### Not/Pauli-X
Inverter which implements logical negation. It is equivalent to a 180 degree
rotation round the x-axis of the bloch sphere.
```
 ⌈0 1⌉⌈1⌉  = ⌈0⌉       ⌈0 1⌉⌈0⌉  = ⌈1⌉
 ⌊1 0⌋⌊0⌋    ⌊1⌋       ⌊1 0⌋⌊1⌋    ⌊0⌋
```
Lets go back to our two dimensional vector space and see what a transoformation
look like there:
```
The base vectors are:
x is ⌈1⌉ and for y we have ⌈0⌉
     ⌊0⌋                   ⌊1⌋

Now, we put these two in a matrix:
⌈1 0⌉
⌊0 1⌋

And we can do transformations using:
⌈1 0⌉⌈3⌉ = ⌈1 * 3 + 0 * 2⌉ = ⌈3⌉
⌊0 1⌋⌊2⌋   ⌊0 * 3 + 1 * 2⌋   ⌊2⌋

What happens if we use the not/pauli-x matrix/operation:
⌈0 1⌉⌈3⌉ = ⌈0 * 3 + 1 * 2⌉ = ⌈2⌉
⌊1 0⌋⌊2⌋   ⌊1 * 3 + 0 * 2⌋   ⌊3⌋
```

Remember that the |0> state is where cos(0) is pointing straight up.

There are no imaginary numbers in the transform matrix (the gate) so this I think
implies that this only involved the Z-X plan. So we can think of this is a transformation
in that plane.
```
From:        X    
             ^
             |
           1 -
             |
             |
   <----|-------->|------>    Z
       -1         1 ⌈1⌉
                    ⌊0⌋
To:
             X
             ^
             |
           1 - ⌈0⌉
             ^ ⌊1⌋
             |
   <----|---------|------>      Z
       -1         1
```
   
Remember that using polar colar coordinates we can identify our points. 
Notice that this is a 90 degree rotation, but the sphere has different lenght/angles.
```

          Z  0 (0 degrees) But the radius is one (unit circle)
                 ^
             *   |
          *      |
        *        |
       *         |
  π/2  *----------------------> X  
       *         |
        *        | 
         *       |
           *     |
             *   π (180 degrees)
```

The angle θ (theta) can be in the range 0 to π (180 degrees).
The angle Φ (phi) can in the range of 0 to 2π (360 degrees).

Lets use polar coordinates instead:
```
⌈0 1⌉⌈cos(0/2)       ⌉ = ⌈0 * cos(0/2) + sin(0/2) * e^i0⌉ = ⌈0⌉
⌊1 0⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) = 0 * sin(0/2) + 0   ⌋ = ⌊1⌋

|0> = cos(θ/2) * |0> + sin(θ/2) e^(iΦ) * |1>

So if θ = 0:
|φ> = cos(0/2) * |0> + sin(0/2) e^(iΦ) * |1>
|φ> = 1 * |0> + 0 * e^(i 0π/20) * |1>
|φ> = 1 * |0>
|φ> = |0>

And if θ = π:
|φ> = cos(π/2) * |0> + sin(π/2) e^(i0) * |1>
|φ> = 0 * |0> + 1 * e^(i0) * |1>
|φ> = e^(i0) * |1>
|φ> = 1 * |1>
|φ> = |1>
```
But in principal we are doing the same thing in both examples.

There is python example, [not_gate.py](./src/not_gate.py) that contains a 
function and plots a bloch sphere.
```console
$ python3 src/not_gate.py
```

And there is a javascript example in [x_gate.js](./lib/x_gate.js).

#### Pauli-Y
```
⌈0 -i⌉⌈cos(0/2)       ⌉ = ⌈0 * cos(0/2) + -1 sin(0/2) * e^i0 ⌉ = ⌈0 ⌉
⌊i  0⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * i + 0 * sin(0/2) * e^i)⌋   ⌊1i⌋
```
There is a javascript example in [y_gate.js](./lib/y_gate.js).

#### Pauli-Z
```
⌈1  0⌉⌈cos(0/2)       ⌉ = ⌈1 * cos(0/2) + 0 * sin(0/2) * e^i0 ⌉ = ⌈1⌉
⌊0 -1⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * 0 + -1 * sin(0/2) * e^i)⌋   ⌊0⌋
```
There is a javascript example in [z_gate.js](./lib/z_gate.js).

#### Identity
```
⌈1 0⌉⌈1⌉  = ⌈1⌉   ⌈1 0⌉⌈0⌉ = ⌈0⌉
⌊0 1⌋⌊0⌋    ⌊0⌋   ⌊0 1⌋⌊1⌋   ⌊1⌋
```
Is reversable. If we know the outcome and the operation we can reverse this.
Notice that the transformation comes first which in this case is the identity
matrix, and the input which is the vector.

#### S gate (phase gate)
90 degree rotation around z-axis
```
⌈1 0⌉⌈cos(0/2)       ⌉ = ⌈1 * cos(0/2) + 0 * sin(0/2) * e^i0 ⌉ = ⌈1⌉
⌊0 i⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * 0 + -1 * sin(0/2) * e^i)⌋   ⌊0⌋
```
#### S_dagger
-90 degree rotation around z-axis


#### T
45 degree rotation around z-axis

#### T_dagger
-45 degree rotation around z-axis

All gates that rotate less than 180 degrees always rotate around z!

#### Hadamard


#### Toffoli Gate (CCNOT)
Two control qubits and one target qubit. If both of the target qubits are 1 then
the target qubit wil be flipped (the NOT gate). 


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
This is a gate that operator on a pair of bits, one which is the control bit
and the other the target bit. If the control bit is 1 then the target bit is
flipped. And if the control bit is 0 then the target bit is left unchanged.
The control bit is never updated.

```
condition/control matrix:
C = ⌈1 0 0 0⌉
    |0 1 0 0|
    |0 0 0 1|
    ⌊0 0 1 0⌋
Notice that the lower left corner is:
⌈0 1⌉
⌊1 0⌋
And that this is the X operator (swap/exchange). The rest of the matric is
for the control operation.

        ⌈1 0 0 0⌉ ⌈0⌉   ⌈0⌉
C|10> = |0 1 0 0| |0| = |0| = |11>
        |0 0 0 1| |1|   |0|
        ⌊0 0 1 0⌋ ⌊0⌋   ⌊1⌋
```

Example:
```
include "qelib1.inc";
qreg q[2];
creg c[2];

h q[1];
cx q[1],q[0];
measure q[1] -> c[1];
measure q[0] -> c[0];
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
This is alright as long as we use real number, if we use complex numbers then
we will also have an extra z dimension and this becomes a sphere.


If complex number were used then you would have to visualize a sphere.


Hadamard gate
```
     ⌈ 1    1⌉        ⌈ 1⌉
     |--   --|        |--|
     |√2   √2|  ⌈1⌉   |√2|   ⌈0.707⌉
H|0> |       |  ⌊0⌋ = |  | = ⌊0.707⌋
     | 1   -1|        | 1|
     |--   --|        |--|
     ⌊√2   √2⌋        ⌊√2⌋ 

     ⌈ 1    1⌉        ⌈ 1⌉
     |--   --|        |--|
     |√2   √2|  ⌈0⌉   |√2|   ⌈ 0.707⌉
H|1> |       |  ⌊1⌋ = |  | = ⌊-0.707⌋
     | 1   -1|        |-1|
     |--   --|        |--|
     ⌊√2   √2⌋        ⌊√2⌋ 
                     
```
Below we can see these transistions on the unit cirle

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

```
     ⌈ 1    1⌉  ⌈ 1⌉
     |--   --|  |--|
     |√2   √2|  |√2|   ⌈0.707*0.707 +  0.707*0.707⌉  ⌈0.50 + 0.5⌉  ⌈1⌉
     |       |  |  | = ⌊0.707*0.707 + -0.707*0.707⌋= ⌊0.50 - 0.5⌋ =⌊0⌋
     | 1   -1|  | 1|
     |--   --|  |--|
     ⌊√2   √2⌋  ⌊√2⌋ 

     ⌈ 1    1⌉        ⌈ 1⌉
     |--   --|        |--|
     |√2   √2|  ⌈0⌉   |√2|   ⌈ 0.707⌉
     |       |  ⌊1⌋ = |  | = ⌊-0.707⌋
     | 1   -1|        |-1|
     |--   --|        |--|
     ⌊√2   √2⌋        ⌊√2⌋ 
                     
```
Notice that measureing (-1, 0) is the same as (1,0):
```
⌈-1⌉
⌊ 0⌋

-1² + 0² = 1 + 0 = 1 (100% probability of being |0>
```
And the same goes for (0, -1):
```
⌈ 0⌉
⌊-1⌋

-0² + 1² = 0 + 1 = 1 (100% probability of being |1>
```

Example:
```
include "qelib1.inc";
qreg q[1];
creg c[1];

h q;
measure q -> c;
```
`qreg` are the number of quantum bit registers that we want to allocate.
`creg` are the number of classical bit registers that we want to allocate.
`h` is the hadamard operator which takes the qbit registers as input.
We then measure q and specify that the output should go to 
So what we are doing is basically:
```
       ⌈0.707  0.707⌉ ⌈1⌉   ⌈0.707⌉   0.707² = 0.5 50% |0>
|0> -->⌊0.707 -0.707⌋ ⌊0⌋ = ⌊0.707⌋   0.707² = 0.5 50% |1>

```
So we should see |0> and |1> 50/50 of the time when running.

Now, lets take this example:
```
include "qelib1.inc";
qreg q[1];
creg c[1];

h q;
barrier q;
h q;
measure q -> c;
```
A 'barrier' is an instruction that prevents optimizations.
This would be something like:
```
       ⌈0.707  0.707⌉ ⌈1⌉   ⌈0.707⌉
|0> -->⌊0.707 -0.707⌋ ⌊0⌋ = ⌊0.707⌋

       ⌈0.707  0.707⌉ ⌈0.707⌉  ⌈1⌉
       ⌊0.707 -0.707⌋ ⌊0.707⌋ =⌊0⌋ 
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

Working backwards, notice that we "should" be able to factor the product state 
into tensor product multiplications but this is not possible, there is no 
solution for these values:
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
```

#### NOT gate

#### Pauli or X Gate
Similar to a NOT gate in classical computing. This will rotate the qbit 180 degrees
along the x-axis.
It is named after Wolfgang Ernst Pauli who won the nobel prize in 1945.
```
|0> -> |1>
|1> -> |0>
```

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
|ψ> = a₁|up> + a₂|down>

|ψ> = √1/4|up> + √3/4|down>
```
Being up/down I think refers to how the electromagnetic field behaves around
the particle. The concrete example above still means that the probability is either
up or down, not that we would ever measure it as 3/4 down or 1/4 up.
With just the up/down we can calculate the probability for left/right.
Convert up/down to left/right:
```
|ψ> = a₁|up> + a₂|down>
|ψ> = a₁|left> + a₂|right>
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
"Matter is a wave as well as a particle" and this forumla gives as a way to 
find the wave lenght of the particle:
```
     h
λ =  -
     P
```
So we have a particle which has a wave function. The wave function does not only
tell us the posistion of the particle but also the speed/momentum of the particle.
```
momentum = speed * mass
```
```
|ψ> = a₁|slow> + a₂|fast> + a₃|faster> + a₄|warp-speed> + ...
```
What if we have a particle and it has a momentum eigenstage, how do we find it's
position?

#### Polarisation
```
                                          o
                                         /
                                     +---+
                                     |---|
                                     |   |
                                     +---+
                             o        /
                            /        /
                        +---+     +---+
                        |---|     | / |
                        |   |     |/  |
        o               +---+     +---+
       /                /           /
      /                /           /
   +---+            +---+        +---+
   | | |            | | |        | | |
   | | |            | | |        | | |
   +---+            +---+        +---+
   /                /             /
  /                /             /
 o                o             o

```
1) The first example shows the case where a vertical polarisation filter is used in 
which case a photon will either pass through or be blocked.
2) The second example shows two filters, first a vertical filter which like the first
case will allow some photons to pass through but will those that do will be blocked
by the second horizontal filter. 
3) The third example we have the vertical filter, then a 45 degree filter, and then
the horizontal filter. 

Now, just looking at the examples we can see that the second and third example are
similiar but we have just added a filter in the middle. In this case we would expect
that nothing gets pass through but this is not the case!!

Now lets say we have a source `X` that produces entangled photons, so even though 
we don't know what spin they have they will always produce the same spin when measured.
```
            o <--------- X ---------> o
   
```
And lets have three filters:
```
Vertical    120 degrees  240
+---+       +---+        +---+
| | |       | \ |        | / |
+---+       +---+        +---+
  1           2            3
```
Now we will have two sites that perform measurements `A` and `B` which will both
have the set of filters above and will randomly choose which one to use.
According to EPR the photon will contain information that will tell the photon
how to behave regardless of what filter is encounters. So the photon must contain
information if it will pass through the vertical filter, or the 120 degree filter, 
or the 240 degree filter. 

So we have three filters and 8 combinations possible:
```
    Vertical (1)   120 (2)    240 (3)
1)           Yes       Yes        Yes
2)           Yes       Yes         No
3)           Yes        No        Yes
4)           Yes        No         No
5)            No       Yes        Yes
6)            No       Yes         No
7)            No        No        Yes
8)            No        No         No
```
So we might create an entangled photon with the following hidden variables:
```
{Yes, No, Yes}
```
If measured with the vertical filter this photon would pass through, as it would 
pass through the 240, but would be blocked by the 120 filter. And remember that
both photons will have the same values for their hidden variables, but the filter
at both sites are randomly choosen.

So we have different combinations of the filters too. We can ignore the cases
when both filters are the same this as it will behave the same at both sites)
```
                                        Filter combinations
    Vertical (1)   120 (2)    240 (3)   1&2   2&3   1&3
1)           Yes       Yes        Yes   Same  Same  Same   (passes through all filters)
2)           Yes       Yes         No   Same  Diff  Diff
3)           Yes        No        Yes   Diff  Diff  Same
4)           Yes        No         No   Diff  Same  Diff
5)            No       Yes        Yes   Diff  Same  Same
6)            No       Yes         No   Diff  Diff  Same
7)            No        No        Yes   Same  Diff  Diff
8)            No        No         No   Same  Same  Same   (does not pass through any filters)
```
So notice that 1 and 8 both pass through or don't pass through, the results are the same.
For the remaining 6 we can see that we get the same outcome, either pass or blocked, 
`1/3` of the time.
```
So we expect that 1/3 or the outcomes to be the same if there are hidden variables!
```
So if we ran the experiment 100 times we would expect the outcomes to match at least
33 times. So outcome is >= 1/3 of the time the experiment is performed.

```
  +--------------++------------+
  |   A        / | \     B     |
  |           /  |  \          |
  |    1     |   2   |    3    |
  |          |___|___|         |
  |         / \  5  / \        |
  |        / 4 \ |/  6 \       |
  +--------------+-------------+
          |             |
          |             |
          |     C       |
          |     7       |
          |             |
          +-------------+
A not B + B not C >= A not C
A not B = 1 + 4
B not C = 3 + 2
A not C = 1 + 2
(1 + 4) + (3 + 2) >= (1 + 2)
(1 + 2) + (4 + 2) >= (1 + 2)
```

#### Bell's theorem

#### Einstein, Podolsky and Rosen (EPR)
In 1935, Albert Einstein collaborated with Boris Podolsky and Nathan Rosen published
a paper were they stated that quantum mechanics (QM) is incomplete because there existed 
so called "Hidden Variables" which must explain at least some of the uncertainty 
inherent in QM. Hidden Variables means that there are microscopic properties of 
fundamental particles that we are unable to observe directly by means of testing, 
perhaps due to technological limitations that might exist at some future time. I.e. 
maybe we simply need a bigger microscope to see the details of what is going on 
at the very smallest level. But since we can't observe them, they may be "hidden" 
now - but perhaps if we knew more about them then that might explain the otherwise 
mysterious behavior of particles. The Heisenberg Uncertainty Principle (HUP), 
a key component of Quantum Mechanics, says that these variables are not just 
unobservable; they simply don't exist outside of the context of an observation.


#### The Heisenburg Uncertainty Principal (HUP)
One way of looking at this is to visualize a graph that only has one peak. The probability
of finding the particle under/within that area is very high. But it is not easy
to find the frequency, there is only one peak so we don't know much about it really.
Take another graph where there are many peaks. Now we can predict/determine the
frequence with pretty good acuracy but now the possible place to find the particle
are more.

#### Position Eigenstate
Just means that the particle will actually be in this location with 100% certainty.

#### Deutch Oracle problem
We want to figure out what operation `f` if but we are only allowed to try 
different inputs and inspect the output.
```
         +-----+
bit ---> |  f  | ---> bit
         +-----+
```
There are four functions on one bit:
```
1) Identity (multiplying with 1)
2) Constant 0
3) Constant 1
4) Negation
```
How can we figure out what operation f is?
On a classical computer we can
```
0 --->  f(x) ----> 0 (either identity or constant 0)
1 --->  f(x) ----> 1 (f must be constant 0)

1 --->  f(x) ----> 1 (either identity or constant 1)
0 --->  f(x) ----> 1 (we know the operation is constant 1)
```
So we would have two operations minium to figure out what the function `f` is.
What about in a quantum computer?  
```
|0> --- f(x) ---->  |0>
|1> --- f(x) ---->  |1>
```
It's actually the same number to identify the four different functions.
What if we want to know if `f` is constant or variable. const0, const1 are 
constant and identity and negation are variable.
```
0 ---> f(x) ----> 0 could be const0 but would also be identity
1 ---> f(x) ----> 0 is const0 

|0> --- f(x) ---->  |0>
```

const0 in qasm:
```
include "qelib1.inc";
// q[0] will hold the output value
// q[1] will hold unmodified input value
qreg q[2];
creg c[2];

// We don't need to set the output as const 0 just set is to zero 
// and the default value is just that.
// Simulate that our input is 1 by flipping 0.
x q[1];
measure q -> c;
```
All qubits are initialized to |0> so to place |1> in q[1] we can use the x
gate/operator:
```
x q[1] --> ⌈0 1⌉⌈1⌉ = ⌈0⌉
           ⌊1 0⌋⌊0⌋   ⌊1⌋

```
Now the output of our `const0` will be:
```
c[0] = 0
c[1] = 1
```
Notice the inlcude in the source file. You can find [qelib1.inc](https://github.com/Qiskit/qiskit-js/blob/master/packages/qiskit-qasm/core/qelib1.inc).

#### Deutsch-Jozsa Algorithm


#### Grover's algorithm
Say you have to search a list of items. You would on average have to search
N/2 and in the worst case N times to find it. So if we have 8 items best case
would be to have to look at 4 items and worst case 8.
With a quantum computer we can find the item of interest in √8 = 2.8284 times.

#### qiskit-js
I'm trying to understand the Circuit class and now this map to my current knowledge
of how qasm works. 
Take the following example:
```js
const circuit = CircuitFor(const0);
circuit.addGate('h', 0, 0);
circuit.addGate('cx', 1, [0, 1]);
circuit.run(10);
```
The API for `addGate` look like this:
```
addGate(gateName, column, wires) {
```
The `column` specifies the qubit to connect to this gate.
`wires' is given as a number or an array of numbers and specifies gate connection.
So the first call above is adding a hadamard gate on qubit 0 and there.
When we add a gate, for example a hadamard gate in qasm:
```
h q[0];
cx q[1], q[0];
```
We only specify a qubit that this is to be added to. Not visually the qubits
are represented as rows in the GUI

```
circuit.addGate('h', 0, 0);

            Column_0         Column_1
Wire 0    -----h------------------------------------
Wire 1    ------------------------------------------
```
So here we have to specify column and the wire, but in qasm we only specify
the qubit. Why is that?  
In the composer or in qasm the order of things is important, if we were to move
the `h q[0] to after the cx gate then the hadamard gate would be placed in the 
second column. 

#### IBM Q u1, u2, u3
In the IBM Q experience there are three physical single-qubit gates which take
1, 2, and 3 parameters. All other gates are just special cases of these three.
```
gate u1(lambda) q { 
  U(0,0,lambda) q; 
}
                     ⌈1        0⌉
u1(λ) = U(0, 0, λ) = ⌊0   e^(iλ)⌋
```

#### Qiskit python
```console
$ pip install qiskit qiskit-aqua
$ pip install qiskit[visualization] qiskit-aqua
$ python3 -c 'import qiskit; print(qiskit.__version__)'
0.7.1
```

#### Qutip
A basis in 
```console
$ python3
>>> from qutip import *
>>> help(basis)
```

```python
b = basis(2, 0)
print(b);
$ python3 bloch.py
Quantum object: dims = [[2], [1]], shape = (2, 1), type = ket
Qobj data =
[[1.]
 [0.]]
```
So the above would represent a single qubit in the |0> (zero ket state).

We can plot this on a bloch sphere (see bloch.py for an example).



