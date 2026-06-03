# Bloch Sphere

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
        x   /   |
                |1>

Θ = theta is the angle in the vertical axis
Φ = phi is the angle in the x-y plane
```

## Qubit State on Bloch Sphere

Take the following qubit state:

```
|φ> = C₀|0> + C₁|1>
```

We could also write this in polar form:

```
C₀ = r₀ e^iΦ
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
```

To visualize the angle on the z axis you have to remember that it is 90 degrees.
So if we take a 90 triangle:

```
   /|
  / |
 /  | cos(θ)
/   |
----+
```

This is how I'd normally visualize a vector.

If we flip this we get:

```
+----
|   /
|  /
| /
|/
+

n_hat_z = cos(θ)
```

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
not the phi angle. cos and sin can take an angle from 0 to 360 degrees, but
the z axis only goes to 180, so if we divide theta by two we will be between
0 and 180 (at least that is what I think is going on).

```
z = cos² y - sin² y = cos(2y)
```

Also note that the y axis is the horizontal axis <---->, x is the axis coming
out towards me, and z is the vertical axis.

Holding a pen to represent `z` helps me a little, and holding it straight up represent
θ = 0. Now I can only move to the right down to π (180 degrees). By moving it we
can stop at different points, and then the Φ angle can be updated to make the top
of the pen point to any location on the sphere at that "height".

```
θ has to be a value between 0 and π (0 <= θ <= π). So it cannot be greater than
π (180 degrees).
```

```
Φ has to be a value between 0 and 2π (0 <= Φ <= 2π). So it cannot be greater than
2π (360 degrees).
```

## Why θ/2?

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
|φ> 1|0> + e^iΦ 0|1>
|φ> 1|0> + 0
|φ> |0>
```

And if we set θ=π we get:

```
|φ> cos(π)|0> + e^iΦ sin(π)|1>
|φ> -1|0> + e^iΦ 0|1>
|φ> -1|0> + 0
|φ> -1|0>
```

Which is really the same physical state, the zero state.

If we instead use θ/2 and let θ=0:

```
|φ> cos(0/2)|0> + e^iΦ sin(0/2)|1>
|φ> 1|0> + e^iΦ 0|1>
|φ> 1|0> + 0
|φ> |0>
```

So that still looks the same, now how about θ=π?

If we instead use θ/2 and let θ=π:

```
|φ> cos(π/2)|0> + e^iΦ sin(π/2)|1>
|φ> 0|0> + e^iΦ 1|1>
|φ> 0 + |1>
|φ> |1>
```

The reason for theta/2 (θ/2) is that we are working in radians and π is 180
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

## Visualization

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
|Ψ> = cos - |0> + e^i0 sin - |1>
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
e^i0 = e^(i * 0) = e^0 = 1
sin(π/2) = 1
|Ψ> = 0 + 1 * 1|1>
|Ψ> = |1>
```

Even though we are dealing with complex numbers, we are still really working
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
```

The difference is that we cannot choose the coefficients directly, they are given
already but we can specify the angles theta and phi.
If we keep phi as zero and just change theta this is similar to the above example
where we scale and add the vectors to get a new vector.

So we can have a 0 or a 1 state depending on if the vector is pointing up or
pointing down. But it can also be pointing anywhere on the sphere, at least
until you measure it, at which point it will collapse into either 0 or 1. In quantum
computing you measure a qubit with a gate which takes in the superposition vector
and spits out 0 or 1 and the probability of 0 or 1 depends on the state of the
qubit.

How do we use this visualization? One way I've heard is to think of this as earth
with latitude, longitude, and amplitude that we use to identify a position on earth.
If we draw a parallel with classical bits they would be like only being able to
be positioned at the south pole or the north pole.

There is a good [simulation](https://www.st-andrews.ac.uk/physics/quvis/simulations_html5/sims/blochsphere/blochsphere.html)
that can be used to get a better feeling for this.
