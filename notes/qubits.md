# Qubits and Complex Vector Spaces

## Qubits

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

## Multiple Qubits

Multiple qubits are represented by their tensor product:

```
x = tensor product

       ⌈1⌉   ⌈1⌉   1 * ⌈1⌉    ⌈1⌉
|00> = ⌊0⌋ x ⌊0⌋ =     ⌊0⌋  = |0|
                              |0|
                  0 * ⌈1⌉     ⌊0⌋
                      ⌊0⌋
```

When we have multiple qubits we have:

```
|Ψ> = a|00> + b|01> + c|10> + d|11>
```

The coefficients (a, b, c, d) are the magnitudes and the sum of these squared
must be 1.

## Exponential Growth

One qubit: α₀|0> + α₁|1>
The electron in one hydrogen atom can either be in the ground state or the excited state.

Two qubits: α₀₀|00> + α₀₁|01> + α₁₀|10> + α₁₁|11>

## Magnitude

If we have a normal vector (3, 4) then we can calculate the length using:

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
to be this way to fit calculations/observations).

## Complex Vector Spaces

This was touched upon above but this section is added to go through a complete
example.

A complex vector space is a set of vectors, each being a one dimensional array
of fixed length and with complex numbers as entries. And as we have seen this
set describes the state of the quantum system.

Example:

```
  ⌈  6-4i  ⌉
  |  7+3i  |
  |4.2-8.1i|
  ⌊  -3i   ⌋
```

A set `C⁴` which has addition, inverse operations, and zero such that addition
is associative and commutative, form what is called an `Abelian group` after
the Norwegian Niels Henrik Abel (1802-1829).

Now, if we in addition to the above properties of an Abelian group also allow
scalar multiplication that has the following properties:

```
c, c₁, c₂ ∈ C
V, W ∈ C⁴

1) 1 * V = V
2) c₁ * (c₂ * V) = (c₁ * c₂) * V
3) c * (V + W) = (c * V) + (c * W)
4) (c₁ + c₂) * V = (c₁ * V) + (c₂ * V)
```

If the group has these properties it is called a `complex vector space`.

## Basis Vectors

A basis is a set of vectors that all other vectors can be uniquely written in terms
of these vectors.

## Dimension

The dimension of a complex vector space is the number of elements in a basis of the vector space.

## Hilbert Space

A Hilbert space is a complex vector space that is complete with respect to the distance
induced by the inner product. (TODO: expand)

## Eigenvalues and Eigenvectors

```
⌈4 -1⌉⌈1⌉ = ⌈(4*1) + (-1*1)⌉ = ⌈3⌉ = 3⌈1⌉
⌊2  1⌋⌊1⌋   ⌊(2*1) + ( 1*1)⌋   ⌊3⌋    ⌊1⌋
```

Notice that only the length of the vector is affected and not its direction.
Eigen is "egen" in Swedish and means own. Perhaps this is because it stays on its
own straight line?

In the above case the `3` is called the eigenvalue and the vector is the eigenvector:

```
3⌈1⌉
 ⌊1⌋
```
