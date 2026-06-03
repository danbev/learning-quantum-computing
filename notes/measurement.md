# Measurement

## Measurement and Probability

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

## Polar Coordinates

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

Remember that we are trying to find the angle theta here, and we can think
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

## Measurement Gate

This gate takes a qubit in superposition as input and outputs either 0 or 1.
I think the wave function is used to get a probability if the output will be
0 or 1.

As measuring/observing a qubit alters its state this should be the last act on a
quantum circuit.

```
|ψ> = α|0> + β|1>

--------[/)]-------
0 with probability |α|²
1 with probability |β|²
```

## Measurement and Polarization

In real life we can think of the photon which has a polarization. For example
the oscillation of the electric field can be horizontal or vertical.

```
|0> horizontal polarization. The wave is oscillating horizontally.
|1> vertical polarization. The wave is oscillating vertically.
|Ψ> would be some other angle of polarization. For example if it is 45 degrees
    then this would be 1/√2|0> + 1/√2|1>
```

To measure this polarization we use a filter. I've bought a sheet of this so
that I can play around with this. I've cut these into 3 small squares and start
by using 2 of them. First I place them one in front of the other and see that
light gets through, nothing is blocked/filtered. The filter is measuring the
oscillation and letting the photons that are oscillating vertically through. This would
be them projecting to |0>.

Now, if I rotate one of the filters 90 degrees all photons will be blocked. This would
be like the photon projecting/collapsing to |1>.

If I only rotate say 45 degrees then some will pass and some will be blocked with
a 50/50 probability.

Remember that after the photon has passed through (if it is not blocked) then its
new polarization will be |0>.

This is what a measurement is - a projection onto a standard basis.
Why is this important? Well not only can we measure the probability of a projection
onto a standard basis but to any basis that we choose. Remember that |0> and |1>
are our unit vectors (basis?) but we could use a different vector as our basis.
