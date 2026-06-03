# Bra-Ket (Dirac) Notation

I'm used to seeing a vector named `a_hat` (with a ^ above the label) but there
is a different notation used in quantum mechanics which is:

```
a_hat = |a>
```

Notice the usage of brackets which is why it is called `bra-ket` or `Dirac` notation.
Remember that what is inside the brackets is just a label for the vector and can
be anything (even a number).

## Ket

The ket is just the pipe symbol and the less-than around the symbol and means
that we are dealing quantum state represented by a column vector:

```
|0> ket ⌈1⌉           "zero-ket"
        ⌊0⌋

|1> ket ⌈0⌉           "one-ket"
        ⌊1⌋
```

## Bra

The bra part is `<0|` = `|0>⁺` which is the complex conjugate:

```
|0> ket ⌈1⌉⁺ (complex conjugate) ->  [1* 0*]
        ⌊0⌋
```

Lets take a look at something that uses a complex number to see the complex
conjugate part a little clearer:

```
<b| = |b>⁺ = ⌈b1⌉⁺ = (b1* b2*)           b  = c + di
             ⌊b2⌋                        b* = c - di
```

## Inner Product

If you specify `<a|b>` this means to perform the dot product operation or
inner product:

```
<0|1> = ⌈1⌉ ⌈0⌉   1*0 + 0*1 = 0
        ⌊0⌋.⌊1⌋ =
```

The dot product tells us how much the two vectors are in the same direction.
When the dot product is zero it means they don't have anything in the same direction
which makes sense as these vectors are perpendicular to each other.

## Basis Vectors

Notice that |0> and |1> are very similar to the basis vectors in physics:

```
i_hat = ⌈1⌉
        ⌊0⌋

j_hat = ⌈0⌉
        ⌊1⌋
```

These form a basis (you can reach any point in R²) by using linear combinations
(scaling and adding).

```
α|0> + β|1>      α, β ∈ Complex number set
                 |α|² + |β|² = 1   (unit vector as the lengths are 1)

We can stack these:
⌈α⌉
⌊β⌋
```

This gives us a two-dimensional vector in a complex vector plane.
So `α` and `β` are the scalars and the `|0>` and `|1>` the basis unit vectors.
When you see:

```
α|0> + β|1>
```

it means that we are scaling these unit vectors by those complex numbers:

```
                  ^
      ⌈0⌉ or|1>   -
      ⌊1⌋         |
                  |
                  |
           ---------------|--->
                          ⌈1⌉ or|0>
                          ⌊0⌋
```

All of the vectors produced must fit on the unit circle (have a radius of 1). So
we can use the values specified on the unit circle to produce vectors.

For example a 45 degree vector would be specified using:

```
45 degrees = (√2/2, √2/2), π/4

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
around the nucleus. The state of the electron is superposition of ground and the
excited state.

We could also write this state as a two dimensional vector space:

```
⌈α⌉
⌊β⌋
```

This vector space is a 2d, complex vector space, the vector is normalized
meaning that |α|² + |β|² = 1.

```
            |1> ^
                |      / 1/√2|0> + 1/√2|1>  (all vectors have a magnitude of 1)
                |    /
                |  /
                |/
      ----------+------------>
                            |0>
```

Why the 1/√2? See the section on [normalization](superposition.md#normalization).

When we only have real numbers we are dealing with points on a unit circle. If
we add complex numbers we then are dealing with a unit sphere (the Bloch sphere,
more on this later).

## Inner Product Example

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
term in the first parentheses times the first term in the second and so on.

```
<0|α* * α|0> + <0|α* * β|1> + <1|β* * α|0> + <1|β* * β|1>
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

## Notation

The following bra:

```
<Ψ|
```

means the complex conjugate transpose:

```
Complex Conjugate:
x + iy -> (x + iy)* = x - iy

Transpose:
⌈a b⌉    ⌈a b⌉†  ⌈a c⌉
⌊c d⌋ => ⌊c d⌋ = ⌊b d⌋

      ⌈α⌉
|Ψ> = ⌊β⌋                        (ket)
<Ψ| = [α* β*]                    (bra)

<ψ| = <0|α* + <1|β*
```

## Additional Notation Notes

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
x ∈{0, 1}² = |00> + |01> + |10> + |11>= |0| + |1| + |0| + |0| =  |1|
                                      |0|   |0|   |1|   |0|    |1|
                                      ⌊0⌋   ⌊0⌋   ⌊0⌉   ⌊1⌋    ⌊1⌋
```
