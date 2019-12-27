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
|0> ket ⌈1⌉           "zero-ket"
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

Also if you specify `<a|b>` this means to perform the dot product operation or
inner product:
```
<0|1> = ⌈1⌉ ⌈0⌉   1*0 + 0*1 = 0
        ⌊0⌋.⌊1⌋ =
```
The dot product tells us how much the two vectors are in the same direction. 
When the dot product is zero it means they don't have anything in the same direction
which makes sense as these vectors are perpendicular to each other.

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
or

1/√2|0> + 1/√2|1> = ⌈1/√2⌉ = ⌈0.707106⌉
                    ⌊1/√2⌋   ⌊0.707106⌋
```

```
                π/2
          |1>   ^
                |      / |Ψ>
                |    / 
                |  /
                |/ ) Θ
    π ----------+------------>
                            |0>
```
The ground state using the `α|0> + β|1>` notation would be when α is 1 and β is
zero:
```
1|0> + 0|1> = |0>
```
And the excited state is when α is zero and β is 1:
```
0|0> + 1|1> = |1>
```
You can visualize the states as the rungs/orbits that an electron can be in
around the nucleus. The state of the electron is superposition of the ground and
excited state.
We could also write this state as a two dimensional vector space:
```
⌈α⌉
⌊β⌋
```
This vector space is a 2d, complex vector space, the vector is normalized meaning
that |α|² + |β|² = 1.
```

            |1> ^
                |      / 1/√2|0> + 1/√2|1>  (all vectors have a magnitude of 1)
                |    /
                |  /
                |/
      ----------+------------>
                            |0>
```

Measurement:
```
      (0 1) |1> ^
                |π/2-θ / |Ψ> = cos(Θ)|0> + sin(θ)|1> = (cos(Θ) sin(Θ))
                |    /
                |  /
                |/ Θ
      ----------+------------>
                     (1 0)  |0>

|0> with probability cos²θ
|1> with probability sin²θ or cos²(π/2 - θ)
```
After measuring the system is disturbed and the actual state will be either
ground or excited. It gets projected onto one of the states.

```
1/√2|0> + 1/√2|1> = 1/√2⌈1⌉ + 1/√2⌈0⌉ = ⌈1/√2⌉ + ⌈0   ⌉ = ⌈1/√2⌉ = ⌈0.707106⌉
                        ⌊0⌋       ⌊1⌋   ⌊0   ⌋   ⌊1/√2⌋   ⌊1/√2⌋   ⌊0.707106⌋
```

Remember that we can describe a vector using two points (a, b), and we can also
specify the same vector using polar coordinates (p, θ) where p is the magnitude/
length and theta is the angle:
```
(a, b) -> (p, Θ)
```
We can calculate the `p` using:
```
p = √(a² + b²)
```
And the angle can be calculated using the inverse tangent function:
```
Θ = arctan(b/a)              // inverse tangent can also be written as tan⁻¹
```
Remember that we are trying to find the angle theta here, and we can thing
of `b` as being the `y` value and `a` being the `x` value:
```
    /|
   / |
  /  | b (adjacent) 
 /   |
 ----+
  a (opposite)

adjacent/opposite = tangent
```
And `arctan` takes a value and returns the angle we want.

So we now have both `p` and `θ`:
```
a = p cos(Θ)
b = p sin(Θ)
⌈a⌉ = ⌈cos(θ)⌉
⌊b⌋   ⌊sin(θ)⌋


|Ψ> = cos(Θ)|0> + sin(Θ)|1> = ⌈cos(Θ)⌉
                              ⌊sin(Θ)⌋
```

Using the above example of 45 degrees we get:
```
cos(45)|0> + sin(45)|1> = ⌈0.707106⌉
                          ⌊0.707106⌋
```
When we measure:
```
|0> with probability cos(Θ)²
|1> with probability sin(Θ)²
```

### Postulates
```
(I) The state of a quantum object is completely specified by the wave function
Ψ(x). This is a complex function. This is a function of position. 

(II) 
The wave function means that the probability of finding the object a point x,
upon measurement, is equal to the norm/length/magnitude squared ψ(x):
P(x) = |ψ(x)|²
The total probability has to be normalized. So this function gives the probability
density
```


### Tensor product
The symbol for the tensor product operation is a circle with an X in it. Don't
confuse this with the XOR operator which is a circle with a cross in it.
```
X = tensor product

|00>   q[1] = ⌈1⌉   q[0] = ⌈1⌉
              ⌊0⌋          ⌊0⌋

              ⌈1 ⌈1⌉ ⌉     ⌈1⌉
              |  ⌊0⌋ |     |0|
q[1] X q[0] = |      |   = |0|
              |0 ⌈1⌉ |     ⌊0⌋
              ⌊  ⌊0⌋ ⌋


|01>   q[1] = ⌈1⌉   q[0] = ⌈0⌉
              ⌊0⌋          ⌊1⌋

              ⌈1 ⌈0⌉ ⌉     ⌈0⌉
              |  ⌊1⌋ |     |1|
q[1] X q[0] = |      |   = |0|
              |0 ⌈0⌉ |     ⌊0⌋
              ⌊  ⌊1⌋ ⌋


|10>   q[1] = ⌈0⌉   q[0] = ⌈1⌉
              ⌊1⌋          ⌊0⌋

              ⌈0 ⌈1⌉ ⌉     ⌈0⌉
              |  ⌊0⌋ |     |0|
q[1] X q[0] = |      |   = |1|
              |1 ⌈1⌉ |     ⌊0⌋
              ⌊  ⌊0⌋ ⌋


|11>   q[1] = ⌈0⌉   q[0] = ⌈0⌉
              ⌊1⌋          ⌊1⌋

              ⌈0 ⌈0⌉ ⌉     ⌈0⌉
              |  ⌊1⌋ |     |0|
q[1] X q[0] = |      |   = |0|
              |1 ⌈0⌉ |     ⌊1⌋
              ⌊  ⌊1⌋ ⌋

```
This is a method of combining vectors. So a tensor b is:
```
X = tensor product (I've yet to find this in digraph)

⌈a₀⌉   ⌈b₀⌉   ⌈     ⌈b₀⌉ ⌉   ⌈a₀b₀⌉
|a₁| X |b₁| = |a₀ . |b₁| | = |a₀b₁|
|a₂|   ⌊b₂⌋   |     ⌊b₂⌋ |   |a₀b₂|
⌊a₃⌋          |          |   |a₁b₀|
              |     ⌈b₀⌉ |   |a₁b₁|
              |a₁ . |b₁| |   |a₁b₂|
              |     ⌊b₂⌋ |   |a₂b₀|
              |          |   |a₂b₁|
              |a₂ . ⌈b₀⌉ |   |a₂b₂|
              |     |b₁| |   |a₃b₀|
              |     ⌊b₂⌋ |   |a₃b₁|
              |          |   ⌊a₃b₂⌋
              |a₃ . ⌈b₀⌉ |
              |     |b₁| |
              ⌊     ⌊b₂⌋ ⌋
              
```

### Qubits
One qubit is an element of C²:
```
|Ψ> = α|0> + β|1>

|0> = ⌈1⌉   |1> = ⌈0⌉
      ⌊0⌋         ⌊1⌋

α|0> = ⌈α⌉  β|1> = ⌈0⌉
       ⌊0⌋         ⌊β⌋

          ⌈α⌉   ⌈0⌉   ⌈α⌉
|Ψ> =     ⌊0⌋ + ⌊β⌋ = ⌊β⌋
```
Where alpha and beta are complex numbers.

Imaging the hydrogen atom which has a single electron which can either be in
the ground state, |0>, or in the excited state |1>.

The following bra:
```
<Ψ|
```
means the complex conjugate transpose:
```
Complex Conjugate:
x + iy -> (x + iy)* = x -iy

Transpose:
⌈a b⌉    ⌈a b⌉†  ⌈a c⌉
⌊c d⌋ => ⌊c d⌋ = ⌊b d⌋

      ⌈α⌉
|Ψ> = ⌊β⌋                        (ket)
<Ψ| = [α* β*]                    (bra)


<ψ| = <0|α* + <1|β*
```

Inner product can be written like this:
```
<Φ|Ψ>
```
Notice that we have a bra side first and then a ket side. So this would mean
that we have a row vector and a column vector.

Inner product of Ψ with itself:
```
<Ψ|Ψ>
|Ψ> = α|0> + β|1>
<Ψ| = [α* β*]                    (bra)
      ⌈α⌉
|Ψ> = ⌊β⌋                        (ket)
```

Multiply the bra by the ket:
```
[<0|α* + <1|β*][α|0> + β|1>]
(<0|α* + <1|β*)(α|0> + β|1>)
```
This is actually what we are doing, multiplying through. So we take the first
term in the first paretheses times the first term in the second and so on.
```
<0|α* * α|0> + <0|a* * β|1> = <1|β* * α|0> = <1|β* * β|1>
|α|²<0|0> + α*β<0|1> + β*α<1|0> + |β|²<1|1> =

<0|0> = 1
<1|1> = 1
```
Remember this means the inner product:
```
⌈1⌉  ⌈1⌉
⌊0⌋ .⌊0⌋ = [1 * 1 + 0 * 0] = 1

<1|0> = 0
⌈0⌉  ⌈1⌉
⌊1⌋ .⌊0⌋ = [0 * 1 + 1 * 0] = 0
<0|1> = 0

|α|² 1 + 0 + 0 + |β|² 1 =  |α|² + |β|²
```

### Exponential growth
One qubit α₀|0> + α₁|1>    The electron in one hydrogen atom can either be in 
                           the ground state of the excited state.

Two qubits α₀₀|00> + k


### Multiple qubits
When we have multiple qubits we have:
```
|Ψ> = a|00> + b|01> + c|10 + d|11>
```
The coefficients (a, b, c, d) are the magnitues and the sum of these squared must
be 1.

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
Notice that `i` is not used when calculating the magnitude/length.
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
                |Θ/
                -------------------------> y
              / |Φ\
             /  |
        x/   |
                |1>

Θ = theta is the angle in the vertical axis
Φ = phi is the angle in the x-y plane
```

Take the following qubit state:
```
|φ> = C₀|0> + C₁|1>
```
We could also write this in polar form:
```
C₀ = r₀ e^1Φ

```

What we can do is imagine a unit vector in this space to visualize the state
of a qubit. Lets call the unit vector n_hat.

```
                ^ z      
                |\ 90 degree angle
                |  \
                |   \
                |    \
                |     /
                |    /
                |   /
                |  /
                |Θ/
                -------------------------> y
              / |Φ
             /  |
           x/   |
                |
                |

To visualize the angle on the z axis you have to remember that it is 90 degrees.
So if we take a 90 triangle:

              / |
               |
               |
               +
   /|
  / |
 /  | cos(θ)
/   |
----+


This is how I'd normally visualize a vector. 

If we flip this we get:
+----
|   /
|  /
| /
|/
+

n_hat_z = cos(θ)
```


          θ                θ
|Ψ> = cos - |0> + e^iΦ sin - |1>
          2                2

                ^ z      
                |0>
                |
                |
                |Θ/
                -------------------------> y
              / |Φ\
             /  |
        x/   |
                |1>
```
Notice that this is actually saying that the state of qubit can be represented
by two values, theta and phi. And the state is any point on the sphere.

Notice that both cos and sin are using θ/2. Notice that this is the theta and
not the phi angle. cos and sin can take an angle from 0 -> 360 degrees, but
the z axis only goes to 180, so if we divide theta by two we will be between
0 and 180 (at least that is what I think is going on).

```
z = cos² y - sin² y = cos(2y)

```


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

Why do we have `θ/2` above?  
This is the input to cosine and sine and they can take an angle from 0 to
360/2π.
Take the following:
```
|φ> cos(θ)|0> + e^iΦ sin(θ)|1>
```
If we set θ=0 we get:
```
|φ> cos(0)|0> + e^iΦ sin(0)|1>
|φ> 1|0> + e^iΦ 0 |1>
|φ> 1|0> + 0
|φ> |0>
```
And if we set θ=π we get:
```
|φ> cos(π)|0> + e^iΦ sin(π)|1>
|φ> -1|0>     + e^iΦ 0|1>
|φ> -1|0>     + 0
|φ> -1|0>
```
Which is really the same physical state, the zero state.
If we instead use θ/2 and let θ=0:
```
|φ> cos(0/2)|0> + e^iΦ sin(0/2)|1>
|φ> 1|0> + e^iΦ 0|1>
|φ> 1|0> + 0
|φ> 1|0>
```
So that still looks the same, not how about θ=π
If we instead use θ/2 and let θ=π:
```
|φ> cos(π/2)|0> + e^iΦ sin(π/2)|1>
|φ> 0|0> + e^iΦ sin(π/2)|1>
|φ> 0 + e^iΦ 1|1>
|φ> 0 + |1>
```

The reason for theta/2 (θ/2) is that we are working in radians and π is a 180
degrees, and π is half way (90 degrees). Recall that this is a limit that is
specified for theta. For Φ (phi) we have a limit of 360 degrees, 2π.

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
The difference is that we cannot choose the coefficients directly, they are given
already but we can specify the angles theta and phi.
If we keep phi as zero and just change theta this is similar to the above example
where we scale and add the vectors to get a new vector.

So we can have a 0 or a 1 state depending on if the vector is pointing up or
pointing down. But it can also be pointing anywhere on the sphere, at least
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
```
   |
   |     /
   |   /
   | / Θ (angle/phase)
   +----------

Real numbers are just phase 0 (no angle):
-------|-|-|-|----
       0 1 2 3

Negative numbers are phase π (180 agrees):
-|-|-|-|-|-|-|----
  -2-1 0 
```

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
|      ⌊1⌋ |     ⌊0⌋
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
Just like the `not`, `and`, `or`, `xor`, `nand` etc gates in classical computers there are
gates in quantum computers as well. These gates operate on a set of inputs
and produce a set of outputs. But they can operate on all the states of the qubit
as the same time by using matrix transformations.

There are 4 operations on a single classical bit:
```
1) Set it to 1
2) Set it to 0
3) Negate/Not~
4) Identity (multiplied by 1)
```

An operators is just 2*2 matrix and a gate is most often multiple operators
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
```
   
Remember that using polar colar coordinates we can identify our points. 
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
90 degree (π/2) rotation around z-axis
```
⌈1 0⌉⌈1⌉ = ⌈1 * 1 + 0 * 1⌉ = ⌈1⌉
⌊0 i⌋⌊0⌋   ⌊0 * 1 + 0 * i⌋   ⌊0⌋

⌈1 0⌉⌈0⌉ = ⌈0 * 1 + 0 * 1⌉ = ⌈0 ⌉
⌊0 i⌋⌊1⌋   ⌊0 * 1 + 1 * i⌋   ⌊1i⌋
Remeber that the magnitude does not take the imaginary part into account so
the outcome is not affected by the these rotations/phase shifts.
```
```
⌈1 0⌉⌈cos(0/2)       ⌉ = ⌈1 * cos(0/2) + 0 * sin(0/2) * e^i0 ⌉ = ⌈1⌉
⌊0 i⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * 0 + -1 * sin(0/2) * e^i)⌋   ⌊0⌋
```

#### S_dagger
-90 degree (π/2) rotation around z-axis
```
⌈1  0⌉
⌊0 -i⌋
```


#### T Gate
45 degree (π/4) rotation around z-axis
```
⌈1      0⌉
⌊0 e^iπ/4⌋
```
Note that this is called `r4` in qiskit-sim. Rotate/phase shift π/4.

#### T_dagger
-45 degree (π/4) rotation around z-axis

All gates that rotate less than 180 degrees always rotate around z!



#### Hadamard gate
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
This can also be written as:
```
 1 
-- ⌈1  1⌉
√2 ⌊1 -1⌋
```
And:
```
|0> + |x>
----------
   √2
```
This last confused me a litle, so lets break it down:
```
              ⌈1⌉   ⌈0⌉    ⌈1⌉
|0> + |x>     ⌊0⌋ + ⌊1⌋    ⌊1⌋    ⌈1/√2⌉
---------- =  --------- = ----- = ⌊1/√2⌋
   √2            √2        √2
```
Remember we are just dealing with vectors but in ket notation. And this case we
are adding two vectors (1, 0) and (0, 1) which gives (1, 1).

```
 ⌈1⌉
 ⌊0⌋
           ^
           |
           |
           |
           +----*----------->
                (1,0)

1  ⌈1  1⌉⌈1⌉ = ⌈1/√2⌉ = ⌈0.70710678⌉
-  ⌊1 -1⌋⌊0⌋   ⌊1/√2⌋   ⌊0.70710678⌋
√2

           ^
           |    
           |  /* (0.70710678, 0.70710678) 
           |/
           +----|----------->

⌈1√2   1/√2⌉⌈1/√2⌉ = ⌈1/√2 * 1/√2 + 1/√2 * 1/√2⌉     = ⌈0.5 + 0.5] = ⌈1⌉
⌊1/√2 -1/√2⌋⌊1/√2⌋   ⌊1/√2 * 1/√2 + 1/√2 * (- 1√2)⌋    ⌊0.5 - 0.5⌋   ⌊0⌋
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
To place one qubit in a superposition we use a single hadamard matrix. To place
n qubits in a superposition we use the tensor product of n hadamard matrices.
```
H X H or H^X2

              j 0  1              1
1 ⌈1  1⌉    i 0⌈1  1⌉   H[i,j] = --- (-1)^i&j
--⌊1 -1⌋      1⌊1 -1⌋             √2
√2

          1                  1           1
H[0,0] = --- (-1)^(0 & 0) = ---(-1)^0 = --- 1 = 0.707106
          √2                 √2          √2

          1                  1           1
H[0,1] = --- (-1)^(0 & 1) = ---(-1)^0 = --- 1 = 0.707106
          √2                 √2          √2

          1                  1           1
H[1,0] = --- (-1)^(1 & 0) = ---(-1)^0 = --- 1 = 0.707106
          √2                 √2          √2

          1                  1           1
H[1,1] = --- (-1)^(1 & 1) = ---(-1)^1 = --- -1 = -0.707106
          √2                 √2          √2
```

Hadamard tensor itself:
```
   1⌈1  1⌉   1⌈1  1⌉    ⌈1  1 1  1⌉
    ⌊1 -1⌋    ⌊1 -1⌋    |1 -1 1 -1
                      = 
   1⌈1  1⌉  -1⌈1  1⌉
    ⌊1 -1⌋    ⌊1 -1⌋
```

```
(H X I)(|0, 0>)
(I X H)(|0, 0>)
```
Notice the order of the hadamard gate and the identity gate. The first will not
affect the bottom qubit, and the second will not affect the top qubit.


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
`h` is the hadamard operator which takes the qubit registers as input.
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


We can chain operations (like bitflip, hadamard) by sending qubits through them:
```
X = X-gate
H = Hadamard gate

⌈1⌉ ---> X -----> H ----------> X ----------> H -----> X ------> 
⌊0⌋         ⌈0⌉       ⌈ 1/√2⌉       ⌈-1/√2⌉      ⌈ 0⌉     ⌈-1⌉    ⌈-1⌉
            ⌊1⌋       ⌊-1/√2⌉       ⌊ 1/√2⌋      ⌊-1⌋     ⌊ 0⌋    ⌊ 0⌋
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

When the hadamard gate is applied to the |0> state has its own symbol which is
|+>:
```
|+> = 1/√2 (|0> + |1>)
|-> = 1/√2 (|0> - |1>)
```


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
```
Notice that the lower left corner is:
```
⌈0 1⌉
⌊1 0⌋
```
And that this is the X operator (swap/exchange). The rest of the matrix is
for the control operation.
```

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
This can be visualized as:
```
a -----------*---------- a              control
             |
b ----------(+)---------- b (+) a       target qubit

```

A qubit is represented by (a b) where a and b are complex numbers and
```
||a²|| + ||b²|| = 1
```
Examples qubit values:
```
  ⌈ 1⌉
  |--|
  | 2|
  |  |   (1/√2)² + (1/√2)² = 0.7071067812² + 0.7071067812² = 0.5 + 0.5 = 1
  | 1|
  |--|
  ⌊√2⌋

  ⌈ 1⌉
  |--|
  | 2|
  |  |  (1/2)² + (√3/2)² = 0.25 + 0.8660254038² = 0.25 + 0.75 = 1
  |√3|
  |--|
  ⌊ 2⌋

```
Now take the qubit value (1/2 1/√2):
```
(1/2)² + (√3/2)² = 0.25 + 0.8660254038² = 0.25 + 0.75 = 1
```
When we measure this qubit it will collapse to either 0 or 1 and the probability
in this case is 0.25 that it will be a zero and 0.75 that it will be a one.

Operations on qubit are done by matrix multiplications or transformations.

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
This is alright as long as we use real number, if we use complex numbers then
we will also have an extra z dimension and this becomes a sphere.
If complex number were used then you would have to visualize a sphere.

### Physical single qubit gates (u1, u2, and u3)

```
|φ> = cos(θ/2) * |0> + sin(θ/2) e^(iΦ) * |1>
```


The following is the most general form of a single qubit unitary matrix:
```
U = ⌈cos(θ/2)          -e^(iλ)sin(θ/2)⌉
    ⌊e^(Φ)sin(θ/2)   e^(iλ+iΦ)cos(θ/2)⌋

So we can imagine a function named U that takes these parameters:
U(theta,phi,lambda);
U(Φ, θ, λ);
```
`u1` takes one parameter with is λ:
```
gate u1(lambda) q { U(0,0,lambda) q; }
```
The first two arguments, which are zero above, are the `theta` and `phi` parameters.
This is then used in the general U matrix like this:
```
U = ⌈cos(0/2)          -e^(iλ)sin(0/2)⌉
    ⌊e^(0)sin(0/2)   e^(iλ+i0)cos(0/2)⌋

U = ⌈1     0⌉
    ⌊0  e^iλ⌋
```
Now, lets take a look at the T gate again which is a 45 degree (π/4) rotation 
around z-axis:
```
⌈1      0⌉
⌊0 e^iπ/4⌋
```
Notice that this is bacically:
```
U1(π/4);
```
And if we take look at the t gate in qiskit-qasm we find:
```
gate t a { u1(pi/4) a; }
```

```
gate u3(theta,phi,lambda) q { U(theta,phi,lambda) q; }
```


### Entanglement
Lets say we have two particles which can be in one of two states:
```
particle₁ = |u₁> or |u₂>
particle₂ = |v₁> or |v₂>
```
Now, if we want to describe the quantum state the whole system, both of the
particles. Note that the particles are not interacting.
So, particle one could be in |u₁> and particle two |v₁>. This can be described
using the tensor product of these two states:
```
X = tensor product
|u₁> X |v₁>
```


If the product state of two qubits cannot be factored they are said to be entangled.
What does that mean?  
We want to take a vector and factor out the products of it.
```
x in this case is the tensor product operator. Should be an x with a circle around it.

                 ⌈x₀y₀⌉
 ⌈x₀⌉ x ⌈y₀⌉ =   |x₀y₁|
 ⌊x₁⌋   ⌊y₁⌋     |x₁y₀|
                 ⌊x₁y₁⌋
```
Working backwards, notice that we "should" be able to factor the product state 
into tensor product multiplications but this is not possible, there is no 
solution for these values:
```
                         a * c should be 1/√2, but c is 0 in this case
 ⌈ 1⌉       ⌈a⌉   ⌈c⌉    a * d should be 0
 |--|    =  ⌊b⌋ x ⌊d⌋ =  b * c should be 0
 |√2|                    b * d should be 1/√2, but b is 0 in this case
 | 0|     
 |  |
 | 0|
 | 1|
 |--|
 ⌊√2⌋

```
So it is not possible to separete the qubit that make up this product state, they
have no individual value, the value only makes sense together.
```
(1/√2)² + 0   = 0.5
0² + (1/√2)²  = 0.5
              = 1.0
```
So this super state has a 50% of collapsing to 0 and 50% of collapsing to 1. So
both qubits take part in the determining the outcome of 0 or 1. So if we measured
one of these qubits and we get |0> we know the other must also be |0>, likewise if
we measure one and get |1> we know that the other must also be |1>. 
Measureing one qubit instantly collapses the other.

Remember that there is a physical qubits in there somewhere which are in this
state together. So in a quantum computer these qubits would be realized as hardware
in someway utilizing something from quantum mechanics which allows a qubit to be
represented (photons are possible but it sounds like it is not very convienient to
do so as it requires very cold temperatures). The strange thing is that if we 
move these qubits apart from one another, even large distances, this will still 
work. How is this possible? I don't think anyone knows but there is no information
sent as this happens faster than the speed of light. There was a theory about
named hidden variable that was about there being hidden information in the qubit
so it knows what it's outcome should be. TODO: try to understand the Bell experiment
on this which should prove that the hidden variable theory is incorrect.
But how does this work then? This is very interesting and got me thinking about
a lecture by Leanard Susskind and about the world as a hologram where all inforation 
was stored in someway separated from the actual 3d world we are in. In this case
perhaps the information is stored there and there is no communication needed at
all.

This how we entangle qubits:
```
                    (CNOT)
|0> ------------------CX-------
         +---+        |
|0> -----| H |--------*-------
         +---+
       (Hadamard) 

First we get the initial state by taking the tensor product of |0> and |0>.

       Hadamard                              CNOT (operates on two qubits)
                                              
⌈1⌉    ⌈1/√2    0  1/√2    0  ⌉⌈1⌉ = ⌈1/√2⌉   ⌈1 0 0 0⌉ ⌈1/√2⌉ = ⌈1/√2⌉
|0|    | 0   1/√2   0     1/√2⌋|0|   | 0  |   |0 1 0 0| | 0  |   | 0  |
|0|    |1/√2    0  -1/√2   0  ||0|   |1/√2|   |0 0 0 1| |1/√2|   | 0  |
⌊0⌋    ⌊ 0   1/√2   0    -1/√2⌋⌊0⌋   ⌊ 0  ⌋   ⌊0 0 1 0⌋ ⌊ 0  ⌋   ⌊1/√2⌋
```
Notice that the hadamard transformation is 4x4 matrix. Since have a two qubit
system we need to make the unitary transform matrix 4x4. This can be done by
taking H tensor product I:
```
   ⌈1  1⌉     ⌈1 0⌉
H =⌊1 -1⌋ I = ⌊0 1⌋

  1⌈1 0⌉  1⌈1 0⌉       ⌈1  0  1  0⌉
   ⌊0 1⌋   ⌊0 1⌋     1 |0  1  0  1|
                   =-- |1  0 -1  0|
  1⌈1 0⌉ -1⌈1 0⌉    √2 ⌊0  1  0 -1⌋
   ⌊0 1⌋   ⌊0 1⌋
```

The measurement gate takes a qubit in a superposition of states as input and 
spits either a 0 or 1.

Regarding this probability, I was wondering how we can compute using it, I mean
there is no guarantee that we find a value in a particular state even though the
probability is high. Right, but if you have many particles then you can use
the probability. Hmm, so is a single qubit implemented using multiple particles 
then or how does that work?

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
Takes 2 qubits and swaps their state.
```  
     ⌈1 0 0 0⌉
S =  |0 0 1 0|
     |0 1 0 0|
     ⌊0 0 0 1⌋
```

#### NOT gate

#### Pauli or X Gate
Similar to a NOT gate in classical computing. This will rotate the qubit 180 degrees
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
A qubit can store a 0 and a 1 at the same time (2¹ = 2)

A 2-bit classic computer can store store:
```
00
01
10
11
```
But only one of these states (0, 1, 2, 3).
A 2-bit qubit can store 2² = 4 values simultaneously. So it can store 0, 1, 2 3
at the same time. But this is under the asumption that we don't inspect the 
value as it would then collapse and only be in of state would it not?
How do the qubits get used in algorithms, I'm obviously missing something here?


#### Superconductor
The great thing about superconductors is that electricity flows without any loss, 
so a current in a close loop can theoretically flow forever.
In a qubit made of a superconductor loop, a current oscillates back and forth 
around a loop. A microwave is injected which excites the current into a superposition of states
This design is used by IBM’s cloud platform Q Experience and is is also used by
Google and a private venture called Quantum Circuits, Inc. (QCI)

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

#### Unitary Transformations
A matrix is unitary if the following condition is satisfied:
```
U  = ⌈a c⌉
     ⌊b d⌋


U† * U = U * U† = I         † = complex conjugate transpose
                            I = identity matrix 
```

Taking the complext conjugate transpose is first taking the complex conjugates
and then performing the transpose operation:
```
1) Complex conjugate:
   ⌈a^* c^*⌉             ^* = complex conjugate
   ⌊b^* d^*⌋
2) Transpose:
   ⌈a^* b^*⌉       
   ⌊c^* d^*⌋

U† = ⌈a^* b^*⌉    
     ⌊c^* d^*⌋

⌈a^* b^*⌉ ⌈a c⌉ = ⌈1 0⌉    
⌊c^* d^*⌋ ⌊b d⌋   ⌊0 1⌋
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


#### Deutsch Oracle algorithm
Invented by David Deutch. We want to figure out if operation `f` is constant or
balanced, but we are only allowed to try different inputs and inspect the output.
The function is constant if the output is independent on the input, and it is
balanced if it is dependant.

This can be written as:
```
f : {0, 1} --> {0, 1}
```
So `f` is a function that takes 0 or one as input and outputs 0 or 1.

```
         +-----+
bit ---> |  f  | ---> bit
         +-----+
```
There are four functions on one bit:
```
1) Identity (multiply the input by 1)
2) Constant 0 (make it 0 regardless of the input)
3) Constant 1 (make it 1 regardless of the input)
4) Negation   (1 => 0, 0 => 1)
```
How can we figure out what operation f is?

On a classical computer we can
```
f(0) ----> 0 (either identity or constant 0)
f(1) ----> 0 (f must be constant 0)

f(1) ----> 1 (either identity or constant 1)
f(0) ----> 1 (we know the operation is constant 1)
```
So we would have two operations minium to figure out what the function `f` is.
The function f could be viewed as a matrix, for example, lets say that f does:
```js
function f(x) {
  return x === 0 ? 1 : 0;
}
```
This could be viewed as the following matrix:
```
⌈0 1⌉
⌊1 0⌋
```
And we can multiply |0> and |1> and verify that these work:
```
⌈0 1⌉⌈1⌉ = ⌈0 * 1 + 0 * 0⌉ = ⌈0⌉
⌊1 0⌋⌊0⌋   ⌊1 * 1 + 0 * 0⌋   ⌊1⌋

⌈0 1⌉⌈0⌉ = ⌈0 * 0 + 1 * 1⌉ = ⌈1⌉
⌊1 0⌋⌊1⌋   ⌊0 * 1 + 0 * 1⌋   ⌊0⌋
```
To have a gate the operates on two qubits we would use:
```
              00 01 10 11 (input |x, y>)
(output   00 [ 0, 1, 0, 0]
|x', y'>) 01 [ 1, 0, 0, 0]
          10 [ 0, 0, 1, 0]
          11 [ 0, 0, 0, 1]

             [ 0, 1, 0, 0] ⌈ 0.5⌉   ⌈-0.5⌉
             [ 1, 0, 0, 0] |-0.5| = | 0.5|
             [ 0, 0, 1, 0] | 0.5|   | 0.5|
             [ 0, 0, 0, 1] ⌊-0.5⌋   ⌊-0.5⌋
```
How did we get this matrix for this function?
```
The input to our "function" is the state |x, y>
x can be either 0 or 1.
y = y XOR f(x)

f(0) = 1
f(1) = 0                             +-----------+
                                     |0 xor 0 = 0|
                                     |0 xor 1 = 1|
                                     |1 xor 0 = 1|
                                     |1 xor 1 = 0|
                                     +-----------+

input       function                         output
|0, 0>      y = 0 XOR f(0) = 0 XOR 1 = 1     |0, 1>
|0, 1>      y = 1 XOR f(0) = 1 XOR 1 = 0     |0, 0>
|1, 0>      y = 0 XOR f(1) = 0 XOR 0 = 0     |1, 0>
|1, 1>      y = 1 XOR f(1) = 1 XOR 0 = 1     |1, 1>

Notice that x is never changed.

Start with a 4x4 empty matrix:
     00 01 10 11
 00 [ 0, 0, 0, 0]
 01 [ 0, 0, 0, 0]
 10 [ 0, 0, 0, 0]
 11 [ 0, 0, 0, 0]

And then add a one to the columns/row that match the input and output above:
     00 01 10 11
 00 [ 0, 1, 0, 0]
 01 [ 1, 0, 0, 0]
 10 [ 0, 0, 1, 0]
 11 [ 0, 0, 0, 1]

```

We setup the state of this two qubit system by first settning qubit 1/
wire 1 to the excited/|1> state, and then applying the hadamard gate to both
which gives the following state:
```
0.5+0i|00>25%        ⌈ 1⌉     |00> - |01> + |10> - |11>     |0> + |1>  |0> - |1>
-0.5+0i|01>25%  = 1/2|-1| =   ------------------------- = ( -------- )(---------)
0.5+0i|10>25%        | 1|                2                     √2         √2
-0.5+0i|11>25%       ⌊-1⌋
```

So the state of the system is the input to our oracle function (the matrix)
that we created above. We set this up so that each we have an equal chance of
|00|, |01>, |10>, |11>.
```

 |0> + |1>   |0> - |1>
( -------- )(---------)
     √2         √2
```

Lets ignore that the first qubit is in the superposition and just leave it as x.
And the second qubit performs |y XOR f(x)>
```
             |0 XOR f(x)> - |1 XOR f(x)>
        |x> (---------------------------)
                          √2
if f(x) = 0:
             |0 XOR 0> - |1 XOR 0)>        |0> - |1>
        |x> (----------------------) = |x>(---------)
                     √2                        √2

if f(x) = 1:
             |0 XOR 1> - |1 XOR 1)>        |1> - |0>
        |x> (----------------------) = |x>(---------)
                     √2                        √2
```
Or as a single cooefficient:
```

              |0> - |1>
(-1)^f(x)|x>( ---------)
                 √2

if f(x) = 0:
        |0> - |1>
(1)|x>( --------- )
           √2

if f(x) = 1:
          |0> - |1>
(-1)|x> ( ---------)
             √2
```
Recall that x is also in the superposition:
```
    (x)
 |0> + |1>   |0> - |1>
( -------- )(---------)
     √2         √2
```

so this would become:
```

 (-1)^f(0)|0> + (-1)^f(1)|1>  |0> - |1>
( --------------------------)(---------)
           √2                    √2

f(0) = 1, f(1) = 0:
 (-1)¹|0> + (-1)⁰|1>   |0> - |1>
( ------------------ )(---------)
           √2             √2

 -1|0> + 1|1>    |0> - |1>         (-1 + 1) = 0
( ------------ )(---------)        ( 1 - 1) = 0
       √2            √2

  |0> - |1>      |0> - |1>
( ------------ )(---------) =
       √2            √2
```

The hadamard matrix takes:
```

|0>+|1>          |0>-|1>
------- -> |0|   ------  -> |1>
  √2               √2
```

So after applying the hadamard gate to the first qubit that should put it
into the |1> state.
In qiskit-js the final state looks like this:
```
[
  { re: 0, im: 0 },
  { re: 0, im: 0 },
  { re: -0.7071067811865474, im: 0 },
  { re: 0.7071067811865474, im: 0 }
]
```
Now, if we factor this tensor product (or what ever it is called) it would give:
```
0 ⌈-0.707106⌉    ⌈0        ⌉
  ⌊ 0.707106⌋    |0        |
               = |-0.707106|
1 ⌈-0.707106⌉    ⌊ 0.707106⌋
  ⌊ 0.707106⌋
```

What if we have a constant function?
```
f(0) = 1, f(1) = 1:
 (-1)¹|0> + (-1)¹|1>   |0> - |1>
( ------------------ )(---------)
           √2             √2

 -1|0> + -1|1>   |0> - |1>
( ------------- )(---------)
        √2           √2

      |0> + |1>        |0> - |1>
(-1)( ------------- )(---------)
         √2               √2

f(0) = 0, f(1) = 0:
 (-1)⁰|0> + (-1)⁰|1>   |0> - |1>
( ------------------ )(---------)
           √2             √2

 1|0> + 1|1>    |0> - |1>
( ----------- )(---------)
           √2       √2

      |0> + |1>   |0> - |1>
(1)( ------------ )(---------)
           √2          √2
```

Again, applying the hadamard to x will now give |0>

```console

             [ 1, 0, 0, 0] ⌈ 0.5⌉   ⌈ 0.5⌉
             [ 0, 1, 0, 0] |-0.5| = |-0.5|
             [ 0, 0, 0, 1] | 0.5|   |-0.5|
             [ 0, 0, 1, 0] ⌊-0.5⌋   ⌊ 0.5⌋
```
Remember that the first matrix is the oracle function, the vector is the input
values which represents the state of the system. Each outcome has a 25% chance
at that point. We will then apply the hadamard gate to qubit 0/wire 0 and that
should reverse that qubit to its initial state, |0>.
```console
State
0+0i|00>0%
0+0i|01>0%
-0.70710678+0i|10>50%
0.70710678+0i|11>50%
```

How about the other three functions/matrices?

```
0 -> 0
1 -> 1
⌈1 0⌉⌈1⌉ = ⌈1 * 1 + 0 * 0⌉ = ⌈1⌉
⌊0 1⌋⌊0⌋   ⌊1 * 0 + 1 * 0⌋   ⌊0⌋

⌈1 0⌉⌈0⌉ = ⌈1 * 0 + 1 * 0⌉ = ⌈0⌉
⌊0 1⌋⌊1⌋   ⌊0 * 0 + 1 * 1⌋   ⌊1⌋

f(0) = 0
f(1) = 1

input       function                         output
|0, 0>      y = 0 XOR f(0) = 0 XOR 0 = 0     |0, 0>
|0, 1>      y = 1 XOR f(0) = 1 XOR 0 = 1     |0, 1>
|1, 0>      y = 0 XOR f(1) = 0 XOR 1 = 1     |1, 1>
|1, 1>      y = 1 XOR f(1) = 1 XOR 1 = 0     |1, 0>

              00 01 10 11 (input |x, y>)
(output   00 [ 1, 0, 0, 0]
|x', y'>) 01 [ 0, 1, 0, 0]
          10 [ 0, 0, 0, 1]
          11 [ 0, 0, 1, 0]

             [ 1, 0, 0, 0] ⌈ 0.5⌉   ⌈ 0.5⌉
             [ 0, 1, 0, 0] |-0.5| = |-0.5|
             [ 0, 0, 0, 1] | 0.5|   |-0.5|
             [ 0, 0, 1, 0] ⌊-0.5⌋   ⌊ 0.5⌋
```

```
0 -> 0
1 -> 0
⌈1 1⌉⌈1⌉ = ⌈1 * 1 + 1 * 0⌉ = ⌈1⌉
⌊0 0⌋⌊0⌋   ⌊0 * 1 + 0 * 0⌋   ⌊0⌋

⌈1 1⌉⌈0⌉ = ⌈1 * 0 + 1 * 1⌉ = ⌈1⌉
⌊0 0⌋⌊1⌋   ⌊0 * 0 + 0 * 0⌋   ⌊0⌋

f(0) = 0
f(1) = 0

input       function                         output
|0, 0>      y = 0 XOR f(0) = 0 XOR 0 = 0     |0, 0>
|0, 1>      y = 1 XOR f(0) = 1 XOR 0 = 1     |0, 1>
|1, 0>      y = 0 XOR f(1) = 0 XOR 0 = 0     |1, 0>
|1, 1>      y = 1 XOR f(1) = 1 XOR 0 = 1     |1, 1>

              00 01 10 11 (input |x, y>)
(output   00 [ 1, 0, 0, 0]
|x', y'>) 01 [ 0, 1, 0, 0]
          10 [ 0, 0, 1, 0]
          11 [ 0, 0, 0, 1]

             [ 1, 0, 0, 0] ⌈ 0.5⌉   ⌈ 0.5⌉
             [ 0, 1, 0, 0] |-0.5| = |-0.5|
             [ 0, 0, 1, 0] | 0.5|   | 0.5|
             [ 0, 0, 0, 1] ⌊-0.5⌋   ⌊-0.5⌋
```

```
0 -> 1
1 -> 1
⌈0 0⌉⌈1⌉ = ⌈0 * 1 + 0 * 0⌉ = ⌈0⌉
⌊1 1⌋⌊0⌋   ⌊1 * 1 + 1 * 0⌋   ⌊1⌋

⌈0 0⌉⌈0⌉ = ⌈0 * 0 + 0 * 1⌉ = ⌈0⌉
⌊1 1⌋⌊1⌋   ⌊1 * 0 + 1 * 1⌋   ⌊1⌋

f(0) = 1
f(1) = 1

input       function                         output
|0, 0>      y = 0 XOR f(0) = 0 XOR 1 = 1     |0, 1>
|0, 1>      y = 1 XOR f(0) = 1 XOR 1 = 0     |0, 0>
|1, 0>      y = 0 XOR f(1) = 0 XOR 1 = 1     |1, 1>
|1, 1>      y = 1 XOR f(1) = 1 XOR 1 = 0     |1, 0>

              00 01 10 11 (input |x, y>)
(output   00 [ 0, 1, 0, 0]
|x', y'>) 01 [ 1, 0, 0, 0]
          10 [ 0, 0, 0, 1]
          11 [ 0, 0, 1, 0]

             [ 0, 1, 0, 0] ⌈ 0.5⌉   ⌈ 0.5⌉
             [ 1, 0, 0, 0] |-0.5| = |-0.5|
             [ 0, 0, 0, 1] | 0.5|   |-0.5|
             [ 0, 0, 1, 0] ⌊-0.5⌋   ⌊ 0.5⌋
```
So we are able to specify the different functions using the above matrices.

```
⌈0 1⌉
⌊1 0⌋
```

In a quantum system every gate must be unitary (and therefor reversable) but this
is not the case with the above matrices. For example, we don't know what value
was multipled against the unitary matric when output is |1>, it could have been 
|0> or |1> but that information would be lost. 

What if we use two qubits instead of one as above?

```
        +--------+
|x> ----|   Uf   |----|x>
|y> ----|        |----|f(x) XOR y>
        +--------+
```
`x` is the that we want to evaluate, the input, this was the single qubit
that we used in the examples above. This will go through the circuit unchanges and
is how we can know what values was passed into the system.
`y` will be the output of this circuit. 

This can be written as:
```
The function takes |x, y> to the state |x, y XOR f(x)>
```
What happens if y = 0:
```
|x, 0> to |x, 0 XOR f(x)>                    +-----------+
                                             |0 xor 0 = 0|
x=0;     f(x) = { 0 -> 1, 1 -> 0 }           |0 xor 1 = 1|
                                             |1 xor 0 = 1|
|0, 0> -> |0, 0 XOR f(0)>   f(0) = 1         |1 xor 1 = 0|
          |0, 0 XOR 1>                       +-----------+
          |0, 1> Notice that this is the same as f(0) = 1

x=1
|1, 0> -> |1, 0 XOR f(1)>   f(1) = 0
          |1, 0 XOR 0>
          |1, 0> Notice that this is the same as f(1) = 0

So we can write this as:
|x, f(x)>
```

```
        +--------+                   +--------+
|x> ----|   Uf   |----|x>------------|   Uf   |--------|x>
|y> ----|        |----|y XOR f(x)----|        |--------|y>
        +--------+                   +--------+

|x, y> goes to |x, y XOR f(x)>
which goes to
|x, (y XOR f(x)) XOR f(x)>
```

Instead of leaving y in the one state we can put it into the superposition
state:
```
                   +--------+            
|x> ---------------|   Uf   |----|x>
|y> --[x]---[H]----|        |----|y XOR f(x)
                   +--------+             

      ⌈1/√2  1/√2⌉⌈0⌉   ⌈ 1/√2⌉   |0> - |1>
H|1> =⌊1/√2 -1/√2⌋⌊1⌋ = ⌊-1/√2⌋ = ---------
                                     √2
```
Just a note about the following notation:
```
 |0> - |1>
 ---------
    √2
```
We are still just dealing with vectors, in this case we are subtracting (1, 0)
by (0, 1) which is (1, -1). We are also dividing by √2 to that gives:
```
(1/√2, -1/√2) = (0.7071067812, -0.7071067812)
```

Recall that x is representing the input which could be 0 or 1. We can leave
this as x for now or replace it with an actual value but remember that there
are two options for this value at the moment.

Lets try applying the hadamard gate to 
both x and y and also on x again after the Uf gate:
```
                   +--------+            
|0> --------[H]----|   Uf   |----[H]--
|1> --[X]---[H]----|        |----
                   +--------+             

x = ⌈1⌉   y = ⌈0⌉
    ⌊0⌋       ⌊1⌋

      ⌈1/√2  1/√2⌉⌈1⌉   ⌈1/√2⌉   |0> + |1>    ⌈0.7071067812⌉
H|0> =⌊1/√2 -1/√2⌋⌊0⌋ = ⌊1/√2⌋ = --------- =  ⌊0.7071067812⌋
                                    √2

      ⌈1/√2  1/√2⌉⌈0⌉   ⌈ 1/√2⌉   |0> - |1>   ⌈ 0.7071067812⌉
H|1> =⌊1/√2 -1/√2⌋⌊1⌋ = ⌊-1/√2⌋ = --------- = ⌊-0.7071067812⌋
                                     √2

                                                          ⌈+1/2⌉
⌈|0> + |1>⌉⌈|0> - |1>⌉   +|0,0> - |0,1> + |1,0> - |1,1>   |-1/2|
|---------||---------| = ------------------------------ = |+1/2|
⌊   √2    ⌋⌊   √2    ⌋               √2                   ⌊-1/2⌋
```

Which is the same thing as:
```

        ⌈0.707106 ⌈ 0.707106⌉ ⌉     ⌈ 0.5⌉
        |         ⌊-0.707106⌋ |     |-0.5|
x X y = |                     |   = | 0.5|
        |0.707106 ⌈ 0.706106⌉ |     ⌊-0.5⌋
        ⌊         ⌊-0.706106⌋ ⌋

Where X is the tensor product operator/symbol.
```
So here we can see the state of the quantum circuit before we apply the Uf 
transformation/function (our oracle function which is either balanced or 
constant).

Notice that this way or writing the quantum state has a nice property:
```
                                                           ⌈+1/2⌉
⌈|0> + |1>⌉⌈|0> - |1>⌉   +|0,0> - |0,1> + |1,0> - |1,1>    |-1/2|
|---------||---------| = ------------------------------ =  |+1/2|
⌊   √2    ⌋⌊   √2    ⌋               √2                    ⌊-1/2⌋
```
The first matrix is the our top qubit, y, and the second is our bottom qubit
x. So if we want to apply Uf we can inject it into this syntax:
```
⌈(-1)^f(0) |0> + (-1)^f(1) |1>⌉⌈|0> - |1>⌉ 
|-----------------------------||---------|
⌊            √2               ⌋⌊   √2    ⌋
``` 
Notice that we have replaced the top qubit with the Uf function.
What will happen if f(0) = 1 and f(1) = 0:
```
⌈(-1)^1 |0> + (-1)^0 |1>⌉⌈|0> - |1>⌉ 
|-----------------------||---------|
⌊            √2         ⌋⌊   √2    ⌋

⌈-1|0> + 1|1>⌉       ⌈|0> - |1>⌉ 
|------------| = (-1)|---------|
⌊    √2      ⌋       ⌊   √2    ⌋


    ⌈|0> - |1>⌉⌈|0> - |1>⌉ 
(-1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋

And if we instead have if f(0) = 0 and f(1) = 1:
⌈(-1)^0 |0> + (-1)^1 |1>⌉⌈|0> - |1>⌉ 
|-----------------------||---------|
⌊            √2         ⌋⌊   √2    ⌋

⌈1|0> + (-1)|1>⌉       ⌈|0> - |1>⌉ 
|--------------| = (+1)|---------|
⌊    √2        ⌋       ⌊   √2    ⌋

    ⌈|0> - |1>⌉⌈|0> - |1>⌉ 
(+1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋
```
So for a balanced function the state would be one of:
```
    ⌈|0> - |1>⌉⌈|0> - |1>⌉ 
(-1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋

    ⌈|0> - |1>⌉⌈|0> - |1>⌉ 
(+1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋

    ⌈|0> - |1>⌉⌈|0> - |1>⌉ 
(±1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋
```

What will happen if f(0) = 0 and f(1) = 0:
```
⌈(-1)^f(0) |0> + (-1)^f(1) |1>⌉⌈|0> - |1>⌉ 
|-----------------------------||---------|
⌊            √2               ⌋⌊   √2    ⌋

⌈(-1)^0 |0> + (-1)^0 |1>⌉⌈|0> - |1>⌉ 
|-----------------------||---------|
⌊            √2         ⌋⌊   √2    ⌋

⌈|0> + |1>⌉⌈|0> - |1>⌉ 
|---------||---------|
⌊    √2   ⌋⌊   √2    ⌋

And if f(0) = 1 and f(1) = 1:
⌈(-1)^1 |0> + (-1)^1 |1>⌉⌈|0> - |1>⌉ 
|-----------------------||---------|
⌊            √2         ⌋⌊   √2    ⌋

⌈(-1) |0> + (-1) |1>⌉⌈|0> - |1>⌉ 
|-------------------||---------|
⌊            √2     ⌋⌊   √2    ⌋

    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(-1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋
```
So for a constant function the state would be one of:
```
    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(+1)|---------||---------|
    ⌊    √2   ⌋⌊   √2    ⌋

    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(-1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋

    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(±1)|---------||---------|
    ⌊   √2    ⌋⌊   √2    ⌋
```

The last hadamard gate on the top qubit does the following:
```
    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(±1)|---------||---------| => |0>
    ⌊   √2    ⌋⌊   √2    ⌋

    ⌈|0> + |1>⌉⌈|0> - |1>⌉ 
(-1)|---------||---------| => |1>
    ⌊   √2    ⌋⌊   √2    ⌋
```

Just keep in mind that what we are trying to do is determine if Uf, the
function f is constant or balanced. And by putting the quantum circuit into
this state we can determine what the Uf matrix is doing (constant or balanced).

So we multiply this state with the `Uf` matrix:
```
[0, 1, 0, 0]⌈ 0.5⌉   ⌈-0.5⌉
[1, 0, 0, 0]|-0.5| = | 0.5|
[0, 0, 1, 0]| 0.5|   | 0.5|
[0, 0, 0, 1]⌊-0.5⌋   ⌊-0.5⌋
```
We also run the top qubit through a hadamard gate (H X I) to produce:.
```
⌈    0⌉
|    0|
|-1/√2|
⌊ 1/√2⌋
```
We now measure the top qubit `x` and if it is in the |0> state Uf is a constant
function and if not it is a balanced function. 

The state of the circuit is currently:
```
      ⌈0 ⌈-1/√2⌉⌉     ⌈    0⌉
      |  ⌊ 1/√2⌋|     |    0|
      |         | =   |-1/√2|
      |1 ⌈-1/√2⌉|     ⌊ 1/√2⌋
      ⌊  ⌊ 1/√2⌋⌋
```
`
In our case the result is the top qubit |1> state so our function is balanced
which indeed is true.

Notice that the `Uf` operates on a superposition state and not on a single
input like |00>, |01>, |10>, or |11>. 

The complete circuit would look like this:
```
(H X I)Uf(H X H)|0,1>
```
|0, 1> is the tensor product of |0> X |1>:
```
⌈1⌉ ⌈0⌉ = 1⌈0⌉   ⌈0⌉
⌊0⌋X⌊1⌋    ⌊1⌋ = |1| 
          0⌈0⌉   |0|
           ⌊1⌋   ⌊0⌋
```

Our initial state would be (after the not gate to make y = 1):
```
|x, 1>
x = 0
⌈1⌉ ⌈0⌉ = 1⌈0⌉   ⌈0⌉
⌊0⌋X⌊1⌋    ⌊1⌋ = |1| 
          0⌈0⌉   |0|
           ⌊1⌋   ⌊0⌋
|01>

x = 1
⌈0⌉ ⌈0⌉ = 0⌈0⌉   ⌈0⌉
⌊1⌋X⌊1⌋    ⌊1⌋ = |0| 
          1⌈0⌉   |0|
           ⌊1⌋   ⌊1⌋
|11>
```
Next, we apply the hadamard transformation
```
State = |01>
⌈0.707106 0        0.707106  0        ⌉ ⌈0⌉    ⌈0       ⌉
|       0 0.707106 0         0.707106 | |1|  = |0.707106|
|0.707106 0        -0.707106 0        | |0|    |0       |
⌊       0 0.707106 0         -0.707106⌋ ⌊0⌋    ⌊0.707016⌋

State = |11>
⌈0.707106 0        0.707106  0        ⌉ ⌈0⌉    ⌈0        ⌉
|       0 0.707106 0         0.707106 | |0|  = | 0.707106|
|0.707106 0        -0.707106 0        | |0|    |0        |
⌊       0 0.707106 0         -0.707106⌋ ⌊1⌋    ⌊-0.707016⌋

```
So after the hadamard gate: 
```
    ⌈|0> - |1>⌉   |x, 0> - |x, 1>
 |x>|---------| = ---------------
    ⌊   √2    ⌋         √2
```

```
   ⌈|0 XOR f(x)> - |1 XOR f(x)>⌉
|x>| ------------------------- |
   ⌊         √2                ⌋

This can be simplified by realising:
x = 0, f(x) { 0, 1} 
            { 1, 0} 
0 XOR f(0) - 1 XOR f(0) = 
0 XOR 1    - 1 XOR 1    = 
         1 - 0              // if the opposite of f(x)

x = 1
0 XOR f(1) - 1 XOR f(1) = 
0 XOR 0    - 1 XOR 0    = 
         0 - 1              // if the opposite of f(x)

So this can be written as:

   ⌈|f(x)> - |f_bar(x)>⌉
|x>|-------------------|
   ⌊       √2          ⌋

```
f_bar means the opposite of f(x).

So, when f(x)=0 we have:
```
   ⌈|0> - |1>⌉       ⌈⌈1⌉   ⌈0⌉⌉      ⌈⌈ 1⌉⌉        ⌈ 0.7071067812⌉
|x>|---------|  = |x>|⌊0⌋ - ⌊1⌋| = |x>|⌊-1⌋|   = |x>⌊-0.7071067812⌋
   ⌊   √2    ⌋       |---------|      |----|
                     ⌊   √2    ⌋      ⌊ √2 ⌋
                                
|0> - |1> = (1,0) - (0,1) = (1,-1)          
         ^                                          ^
         |                                          |
   (0,1) -                                     =    |  
         |                                          |
         +---|---------->                           +------------------->
         | \ (0,1)                                  | \
         |   *(1, -1) (1/√2,-1/√2)                  |  *(0.7071067812,-0.7071067812)
```

And, when f(x)=1 we have:
```
   ⌈|1> - |0>⌉       ⌈⌈0⌉   ⌈1⌉⌉      ⌈⌈-1⌉⌉        ⌈-0.7071067812⌉
|x>|---------|  = |x>|⌊1⌋ - ⌊0⌋| = |x>|⌊ 1⌋|   = |x>⌊ 0.7071067812⌋
   ⌊   √2    ⌋       |---------|      |----|
                     ⌊   √2    ⌋      ⌊ √2 ⌋

|1> - |0> = (0,1) - (1,0) = (-1,1)          
         ^                                         ^
         |                                         |
(-1,1)*  -      (-1/√2, 1/√2)  =   (-1/√2, 1/√2)*  |   
        \|                                        \|
         +---|---------->                          +------------------->
            (0,1)

[0, 1, 0, 0]⌈ 0.5⌉   ⌈-0.5⌉
[1, 0, 0, 0]|-0.5| = | 0.5|
[0, 0, 1, 0]| 0.5|   | 0.5|
[0, 0, 0, 1]⌊-0.5⌋   ⌊-0.5⌋
```

```
f(x) = 0
x = |0>
⌈1⌉⌈ 0.7071067812⌉ = ⌈0.7071067812⌉
⌊0⌋⌊-0.7071067812⌋   ⌊   0        ⌋

f(x) = 1
x = |1>
⌈0⌉⌈-0.7071067812⌉ = ⌈   0        ⌉
⌊1⌋⌊ 0.7071067812⌋   ⌊0.7071067812⌋
```

So we have:
```
    ⌈|0> - |1>⌉
|x> |---------|    if f(x) = 0
    ⌊   √2    ⌋

    ⌈|1> - |0>⌉
|x> |---------|    if f(x) = 1
    ⌊   √2    ⌋
```

```
a - b = (-1)(b - a)
```
So we can use this to re-write the above like this:
```
              ⌈|0> - |1>⌉
(-1)^f(x) |x> |---------| 
              ⌊   √2    ⌋
```
With |x> in a superposition we have:
```
⌈(-1)^f(x) |0> + (-1)^f(x) |1>⌉⌈|0> - |1>⌉
|-----------------------------||---------|
⌊          √2                 ⌋⌊   √2    ⌋

⌈(-1)^f(0) |0> + (-1)^f(1) |1>⌉⌈|0> - |1>⌉
|-----------------------------||---------|
⌊          √2                 ⌋⌊   √2    ⌋

if f(0) = 1, and f(1) = 0:
⌈(-1)^1 |0> + (-1)^0 |1>⌉⌈|0> - |1>⌉
|-----------------------||---------|
⌊          √2           ⌋⌊   √2    ⌋

⌈-1 |0> + 1 |1>⌉⌈|0> - |1>⌉
|--------------||---------|
⌊   √2         ⌋⌊   √2    ⌋

```

The idea is to check all possible combination
```
|00> = q[1] = ⌈1⌉   q[0] = ⌈1⌉
              ⌊0⌋          ⌊0⌋

|01> = q[1] = ⌈1⌉   q[0] = ⌈0⌉
              ⌊0⌋          ⌊1⌋

|10> = q[1] = ⌈0⌉   q[0] = ⌈1⌉
              ⌊1⌋          ⌊0⌋

|11> = q[1] = ⌈0⌉   q[0] = ⌈0⌉
              ⌊1⌋          ⌊1⌋
```

```
|0> -------H-----------

Recall that |0> can also be written as ⌈1⌉
                                       ⌊0⌋

which is the following vector:
     y ^
       |
       |
       |    (1, 0)
       |    |
       +---->----> x
            1

     ⌈ 1    1⌉        ⌈ 1⌉
     |--   --|        |--|                          ⌈1⌉   ⌈0⌉    ⌈1⌉
     |√2   √2|  ⌈1⌉   |√2|   ⌈0.707⌉   |0> + |1>    ⌊0⌋ + ⌊1⌋    ⌊1⌋
H|0> |       |  ⌊0⌋ = |  | = ⌊0.707⌋ = ---------- = --------- =  ---  
     | 1   -1|        | 1|                √2           √2        √2
     |--   --|        |--|
     ⌊√2   √2⌋        ⌊√2⌋ 

And this could also be written as:
1        1           |0> + |1>  
-- |0> + -- |1> =    ----------
√2       √2              √2

     y ^
       |
     1 -
       |   / (0.707, 0.707)  (imaging an arrow from the origin) 
       | / 
       +----|----> x
            1

0.707² + 0.707² = 0.5 + 0.5 = 1



|1> -------H----------- :

     ⌈ 1    1⌉        ⌈ 1⌉
     |--   --|        |--|
     |√2   √2|  ⌈0⌉   |√2|   ⌈ 0.707⌉
H|1> |       |  ⌊1⌋ = |  | = ⌊-0.707⌋
     | 1   -1|        |-1|
     |--   --|        |--|
     ⌊√2   √2⌋        ⌊√2⌋ 
```
So the quantum register/state for this could be written as:

So, we want to put the state of the circuit into:
```
                                                           00 ⌈+1/2⌉
⌈|0> + |1>⌉⌈|0> - |1>⌉   +|0,0> - |0,1> + |1,0> - |1,1>    01 |-1/2|
| ------- || ------- | = ------------------------------  = 10 |+1/2|
⌊   √2    ⌋⌊   √2    ⌋              2                      11 ⌊-1/2⌋

```


#### Deutsch-Jozsa Algorithm
Similar to the Deutsch-Oracle algoritm but instead of just instead of checking/determining
if a single function is constant or balanced we are concerned with if the input
of {0, 1}² are const or balaned
this:
```
f : {0, 1} --> {0, 1}
```
This algoritm deals with `{0, 1}ⁿ` inputs:
```
f : {0, 1}ⁿ --> {0, 1}
```
So instead of just a single input values we have `n`. Just to be clear on this
, the input is a string or an array of zero and ones. There is still a function
f that is run for each of the inputs. It is the result from running `f` which 
we check the resulting array of zeros or ones to see if the function is constant
or balanced.

Lets try this with two qubits:
```
f : {0, 1}² --> {0, 1}
```
Remember that we also have to make the gate reversable so we have the control
bit y as well. So have the following functions for f:
```
00 -> 1
01 -> 1
10 -> 0
11 -> 0

f(0) = 1
f(1) = 1
```
But for our oracle matrix we also have to account for the control bit y. So
the input below will be (x1, x2, y):
```
     input    function                               output
+----000      y = 0 XOR f([0, 0]) = 0 XOR 1 = 1      001 ----------+
|    001      y = 1 XOR f([0, 0]) = 1 XOR 1 = 0      000           |
|    010      y = 0 XOR f([0, 1]) = O XOR 1 = 1      011           |
|    011      y = 1 XOR f([0, 1]) = 1 XOR 1 = 0      010           |
|    100      y = 0 XOR f([1, 0]) = 0 XOR 0 = 0      100           |
|    101      y = 1 XOR f([1, 0]) = 1 XOR 0 = 1      101           |
|    110      y = 0 XOR f([1, 1]) = O XOR 0 = 0      110           |
|    111      y = 1 XOR f([1, 1]) = 1 XOR 0 = 1      111           |
|                                                                  |
+---------------+                                                  |
                ↓                                                  |
               000 001 010 011 100 101 110 111                     |
          000 [ 0,  1,  0,  0,  0,  0,  0,  0]                     |
          001 [ 1,  0,  0,  0,  0,  0,  0,  0] <-------------------+
          010 [ 0,  0,  0,  1,  0,  0,  0,  0]
          011 [ 0,  0,  1,  0,  0,  0,  0,  0]
          100 [ 0,  0,  0,  0,  1,  0,  0,  0]
          101 [ 0,  0,  0,  0,  0,  1,  0,  0]
          110 [ 0,  0,  0,  0,  0,  0,  1,  0]
          111 [ 0,  0,  0,  0,  0,  0,  0,  1]

```

```
00 -> 0
01 -> 0
10 -> 1
11 -> 1

f(0) = 1
f(1) = 1
```
But for our oracle matrix we also have to account for the control bit y. So
the input below will be (x1, x2, y):
```
     input    function                               output
+----000      y = 0 XOR f([0, 0]) = 0 XOR 0 = 0      000 ----------+
|    001      y = 1 XOR f([0, 0]) = 1 XOR 1 = 1      001           |
|    010      y = 0 XOR f([0, 1]) = O XOR 0 = 0      010           |
|    011      y = 1 XOR f([0, 1]) = 1 XOR 0 = 1      011           |
|    100      y = 0 XOR f([1, 0]) = 0 XOR 1 = 0      101           |
|    101      y = 1 XOR f([1, 0]) = 1 XOR 1 = 1      100           |
|    110      y = 0 XOR f([1, 1]) = O XOR 0 = 1      111           |
|    111      y = 1 XOR f([1, 1]) = 1 XOR 1 = 1      110           |
|                                                                  |
+---------------+                                                  |
                ↓                                                  |
               000 001 010 011 100 101 110 111                     |
          000 [ 1,  0,  0,  0,  0,  0,  0,  0] <-------------------+
          001 [ 0,  1,  0,  0,  0,  0,  0,  0] 
          010 [ 0,  0,  1,  0,  0,  0,  0,  0]
          011 [ 0,  0,  0,  1,  0,  0,  0,  0]
          100 [ 0,  0,  0,  0,  0,  1,  0,  0]
          101 [ 0,  0,  0,  0,  1,  0,  0,  0]
          110 [ 0,  0,  0,  0,  0,  0,  0,  1]
          111 [ 0,  0,  0,  0,  0,  0,  1,  0]
```


#### Grover's algorithm
Say you have to search a list of items. You would on average have to search
N/2 and in the worst case N times to find it. So if we have 8 items best case
would be to have to look at 4 items and worst case 8.
With a quantum computer we can find the item of interest in √8 = 2.8284 times.

To be able to search in a quantum computer we need to encode the search as a
binary encoding of the items:
```
x, w ∈ {0, 1}ⁿ
N = 2ⁿ

Let say n is 2. That would give N=4:
⌈0 or 1⌉
|0 or 1|
|0 or 1|
⌊0 or 1⌋

Uf|x> = (-1)^f(x)|x>
f(x) = 0 
       (-1)⁰|x>
       1x>
       Notice that in this case nothing happens. The value is multiplied with
       1 which is the same as a no-op.
f(x) = 1
       (-1)¹|x>
       -1x>
       In this case it will switch reflect/"rotate" the value
```
Before looking at the list of items we have no idea of where the item we are 
looking for is. So any location is possible.
```
    1  N-1
|s> -- ∑ |x>
    √N x=0

So |x> is in braket notaion, that is a vector. We are adding these vectors, 
and then multiplying that value with 1/√N. 

Let say we N is 2² = 4
    1  4-1
|s> -- ∑ |x>
    √4 x=0
```
So what is all values are |0> then we would be adding them:
```
   ^
   |
   |
   |
   +--|--|--|--|-->
      1
⌈1⌉ + ⌈1⌉ ... = 1/√4 ⌈4⌉
⌊0⌋   ⌊0⌋            ⌊0⌋

⌈0.5⌉ + ⌈0.5⌉ ... = ⌈2⌉
⌊  0⌋   ⌊   ⌋       ⌊0⌋

Recall that 0.5² = 0.25. So the probability is 1/4 that the state will collapse
to that value which is expected.
```
If we measure the state it would collable to any one of the basis states
(|00>, |01>, |10>, or |11>) with an equal probability of 1/N = 1/2ⁿ.
On our case this would be 1/4.
How do we increase this probability?

Amplitude Amplification
In this case we want to stretch out

Uniform superposition:
```
|s> HXⁿ|0>ⁿ
```
So this is zero state to the power of 2,  Hadapard tensored with itself 2 times


A 1 would be used for the item we are looking for.

### Qiskit python
```console
$ pip install qiskit qiskit-aqua
$ pip install qiskit[visualization] qiskit-aqua
$ python3 -c 'import qiskit; print(qiskit.__version__)'
0.7.1
```

### Qutip
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


How do we actually compute with qubits. I can understand how we can have multiple
qubits entangled and we can operate 

### Shor's Algorithm
The task is to factor an integer `N` into `d` demimal digits. The brute force
method would have to go through all primes up to √N and see if the prime divides
`N`.
What is done instead of to reduct the problem into another one called period-
finding.

So lets make N = 35, and q = 5 and p is 7.
So we have our two prime numbers which multiplied togther are 32. 
And lets say our keybit size ie 48 (for no particular reason:
```
N = 35
q = 5
p = 7
x mod N, x² mod N, x³ mod N, ...

So let just take a random x value, 3
3 mod 35 =   3
3² mod 35 =  9
3³ mod 35 = 27
3⁴ mod 35 = 11
3⁵ mod 35 = 33
3⁶ mod 35 = 29
3⁷ mod 35 = 17
3⁸ mod 35 = 16
3⁹ mod 35 = 13
3¹⁰ mod 35 = 4
3¹¹ mod 35 = 12
3¹² mod 35 = 1
3¹³ mod 35 = 3        <--- start of repeat
3¹⁴ mod 35 = 9
3¹⁵ mod 35 = 27

So the period is 12 in this case.

(p -1)(q-1) = (7-1)(5-1) = (6)(4) = 24

```

### Basis vector
Is a set of vector that all other vectors can be uniquely written in terms
of these vectors.

### Dimension
Of a complex vector space is the number of elements in a basis of the vector space

### Hilbert space

### Eigen value and Eigen vectors
```
⌈4 -1⌉⌈1⌉ = ⌈(1*4) + (-1*1)⌉ = ⌈3⌉ = 3⌈1⌉
⌊2  1⌋⌊1⌋   ⌊(1*2) + ( 1*1)⌋   ⌊3⌋    ⌊1⌋
```
Notice that only the lenght of the vector is affected and not its direction.
Eigen is "egen" in Swedish and means own. Perhaps this is because is stays on its
own straight line?

In the above case the `3` is called the eigen value and the vector is the eigen
vector:
```
3⌈1⌉
 ⌊1⌋
```

### Reversalbe gates
I've mentioned previously that all gates in a quantum system need to be reversable
but I've not understood why. This section tries to explain why...

The point is that erasing information is a process/operation that gives up 
energy. The analogy that I've found useful comes from the book "Quantum Computing
for Computer Scientists". Here they describe a system like a tub of water with 
a divider that can separate the water. The system is in an unknown state when
there is no divider at all:
```
 |        |
 |~~~~~~~~|
 +--------+
    |?>
```
If we push all the water to the left we have the |0> state:
```
 |~~~~|   |
 |    |   |
 +--------+
  |0>
```
If we push all the water to the right we have the |1> state:
```
 |    |~~~|
 |    |   |
 +--------+
       |1>
```
Now, if we have the zero state and drill a hole in the dividor the water will
start to leak out and this would be used to drive some sort of motor/turbine. This
is where energy is leaving the system which is erasing information and an irriverable
process. Writing information, putting the system into different state is reversable
as long as we know the previous state. We can go from the unknown state to |0>
to unknown and back to |0>. 

A computer that is reverable and does not erase information does not use any 
energy.  

Take the controlled not gate (CNOT):
```
⌈1 0 0 0⌉
|0 1 0 0|
|0 0 0 1|
⌊0 0 1 0⌋
```
Lets say that we have a 2 qubit system with the qubits named `x` and `y`:
```
                |x>              |x>
|x> -----[*]---------------[*]-------
          |                 |
|y> -----[cn]--------------[cn]------
                |x XOR y>        |x XOR x XOR y>
```
`x XOR x` is always equal to 0:
```
x = 0     0 XOR 0 = 0
x = 1     1 XOR 1 = 0

x = 0, y = 1
x XOR x XOR y:
(0 XOR 0) XOR 1 = 0 XOR 1 = 1
0 XOR (0 XOR 1) = 0 XOR 1 = 1
```

### Measurement
```
|ψ> = α|0> + β|1>

--------[/)]-------
0 with probability |α|²
1 with probability |β|²
```


### Standing waves
I've taken notes about this and there is a good section about this on
[Khan Academy](https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/standing-waves-ap/a/standing-waves-review-ap?modal=1)


### Wave length
```
     c                c = speed of light
λ =  -                f = frequency
     f               
```

### Photon Energy
```
E = hf               h = Planck's constant
                     f = frequency
                     E = photon energy
```

### Wave function
```
Ψ = wave function (depends on time...and other things)

```

### Notation notes
This notation was not 100% clear to me when I first read it:
```
Σ |x>
x ∈{0, 1}ⁿ
```
The following example where n=1:
```
Σ |x>                    ⌈1⌉   ⌈0⌉   ⌈1⌉
x ∈{0, 1}¹ = |0> + |1> = ⌊0⌋ + ⌊1⌋ = ⌊1⌋
```
The following example where n=2:
```
Σ |x>                                 ⌈1⌉   ⌈0⌉   ⌈0⌉   ⌈0⌉    ⌈1⌉
x ∈{0, 1}² = |00> + |01> |10> + |11>= |0| + |1| + |0| + |0| =  |1|
                                      |0|   |0|   |1|   |0|    |1|
                                      ⌊0⌋   ⌊0⌋   ⌊0⌉   ⌊1⌋    ⌊1⌋
```


### Global phase
The states |u> and -|u> are indistinguishable. There is no physical experiment
that can tell them apart.
Also the state |u> and i|u> are indistinguishable.
And the state  |u> and c|u> are indistinguishable whenever c is a complex
number of magnitude 1 (this c is called a global phase). 

Is this as simple as multiplying 
```
      ^
     1|
      |
      +-->-------
         1
2⌈1⌉ = ⌈2⌉
 ⌊0⌋   ⌊0⌋

      ^
     1|
      |
      +----->----
            2
```


### Interferometer and interference
Take the following example:
```
                  (mirror)
α                  +----+                
  \                 /  \                 /
   +---------------+    +---------------+
   |Beam Splitter 1|    |Beam Splitter 2|
   +---------------+    +---------------+
  /                 \  /                 \
β                  +----+
                   (mirror)

```
Beam Splitter 1:
```
1 ⌈-1 1⌉ 
--⌊1  1⌋
√2
```
Beam Splitter 2:
```
1 ⌈1  1⌉ 
--⌊1 -1⌋
√2
```
The output of this system is:
```
output = (BS2 matrix)(BS1 matrix)⌈α⌉
                                 ⌊β⌋
```

So lets take a concrete example and pass in |1>:
```

                  (mirror)
                   +----+                
                    /  \                 /
   +---------------+    +---------------+
   |Beam Splitter 1|    |Beam Splitter 2|
   +---------------+    +---------------+
  /                 \  /                 \
⌈0⌉                +----+
⌊1⌋                (mirror)
```
The result of the first beam splitter will be:
```
1 ⌈-1 1⌉ ⌈0⌉   1 ⌈1⌉  ⌈0.707106⌉
--⌊1  1⌋ ⌊1⌋ = --⌊1⌋ =⌊0.707106⌋
√2             √2

⌈0.707106⌉² + ⌊0.707106⌋² = 1
      0.5   + 0.5         = 1
```
So we take the result and the "pass" it through the second beam splitter:
```
1 ⌈1  1⌉ ⌈0.707106⌉   1  ⌈0.707106 +  0.707106⌉
--⌊1 -1⌋ ⌊0.707106⌋ = -- ⌊0.707106 + -0.707106⌋
√2                    √2

                      1  ⌈0.14142⌉
                    = -- ⌊0⌋
                      √2             

                      ⌈1⌉
                    = ⌊0⌋
```

```
                  (mirror)
                   +----+                 1
                    /  \                 /
   +---------------+    +---------------+
   |Beam Splitter 1|    |Beam Splitter 2|
   +---------------+    +---------------+
  /                 \  /                 \
⌈0⌉                +----+                 -0 (=0)
⌊1⌋                (mirror)
```


Notice that a quantum state super inposed upon itself does not change its
physical meaning:
```
|A≅ 2|A> ≅ -1|A> ≅ i|A>
```
This would just be scaling the vector in some manner but when we measure it
would give the same result. This is true as long as the coefficient is none
zero.

```
α|A> + β|B>
```
The polarisation state of a photon can be express using only two terms, but
in the above we have four terms. But if what we said above that the overall 
coefficient does not matter.
```
1        1        α       β             β
- α|A> + - β|B> = - |A> + -|B> = 1|A> + -|B>
α        α        α       α             α
```


### Photoelectric effect
Hertz (1887) shined light against metal plates, high energy beams of light and
noticed that electrons were released. The electrons that are released are some
times called photo electrons but are still just electrons. They were release due
to a photon which is why it is called the photo-electric effect. This will
produce a photo-electric current.
Electrons were only released when the light reached a certain frequency, before
that no electrons were released. There is a threshold frequency V₀ (greek letter
Nv (nu)). So the frequency has to be greater than V₀, V > V₀.
The type of metal also effects this, as there energy involved to free the
electrons, calls the work function. So V₀ depends on the metal and the configuration
of atoms at the surface of the metal.

The magnitude of the current was proportional to the intensity of the light. I
think this means that the number of photos release is related to the intenstity
but not the actual energy.
The energy of the photo-electrons was independent of the intensity of the light.

Einstein 1905 light is composed of quanta (later became known as photon) where
```
E = hv           E = energy, h=plancks constant, v=frequency (nu)
```

```
E_e = 1/2 mv²  = E_q-W = hv - W             W = work function
```

```
        h
h_bar = --
        2π

h_bar * c = 200 Mev * fm                 fm = fermi = 10^-15
```

```
       [E]               E = Energy           M = mass
[h] =  ---               V = frequency        L = length
       [V]               h = plancks constant T = time

     
[E] =  M * L²/T²
       
      1
[V] = -                 frequency: cicles per unit time
      T

      M * L²/T²    M * L²    
[h] = --------- =  ------
         1           T
         -        
         T       

    = L * ML
           -
           T

    = [r] [p]                             r = radius/length, p = momentum
    = this is the angular momemtum

    L²
    --   
    2²    L²    1   L²   1   L² 
   --- =  -- /  - = -- / - = -- 
    1     2²    2   4    2   2
    -
    2
    

```

