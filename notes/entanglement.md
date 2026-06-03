# Entanglement

## Entangled States

Let's say we have two particles which can be in one of two states:

```
particle₁ = |u₁> or |u₂>
particle₂ = |v₁> or |v₂>
```

Now, if we want to describe the quantum state of the whole system, both of the
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
into tensor product multiplications but this is not always possible, there is no
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

So it is not possible to separate the qubits that make up this product state, they
have no individual value, the value only makes sense together.

```
(1/√2)² + 0   = 0.5
0² + (1/√2)²  = 0.5
              = 1.0
```

So this super state has a 50% chance of collapsing to |00> and 50% chance of collapsing to |11>.
So both qubits take part in determining the outcome of |00> or |11>. So if
we measured one of these qubits and we get |0> we know the other must also be
|0>, likewise if we measure one and get |1> we know that the other must also be
|1>. Measuring one qubit instantly collapses the other.

Remember that there are physical qubits in there somewhere which are in this
state together. So in a quantum computer these qubits would be realized as hardware
in some way utilizing something from quantum mechanics which allows a qubit to be
represented (photons are possible but it sounds like it is not very convenient to
do so as it requires very cold temperatures). The strange thing is that if we
move these qubits apart from one another, even large distances, this will still
work. How is this possible? I don't think anyone knows but there is no information
sent as this happens faster than the speed of light. There was a theory about
something named hidden variables that was about there being hidden information in the qubit
so it knows what its outcome should be. TODO: try to understand the Bell experiment
on this which should prove that the hidden variable theory is incorrect.

But how does this work then? This is very interesting and got me thinking about
a lecture by Leonard Susskind and about the world as a hologram where all information
was stored in some way separated from the actual 3d world we are in. In this case
perhaps the information is stored there and there is no communication needed at
all.

## Creating Entanglement

This is how we entangle qubits:

```
                    (CNOT)
|0> ------------------CX-------
         +---+        |
|0> -----| H |--------*-------
         +---+
       (Hadamard)
```

First we get the initial state by taking the tensor product of |0> and |0>.

```
       Hadamard                              CNOT (operates on two qubits)

⌈1⌉    ⌈1/√2    0  1/√2    0  ⌉⌈1⌉ = ⌈1/√2⌉   ⌈1 0 0 0⌉ ⌈1/√2⌉ = ⌈1/√2⌉
|0|    | 0   1/√2   0     1/√2||0|   | 0  |   |0 1 0 0| | 0  |   | 0  |
|0|    |1/√2    0  -1/√2   0  ||0|   |1/√2|   |0 0 0 1| |1/√2|   | 0  |
⌊0⌋    ⌊ 0   1/√2   0    -1/√2⌋⌊0⌋   ⌊ 0  ⌋   ⌊0 0 1 0⌋ ⌊ 0  ⌋   ⌊1/√2⌋
```

Notice that the Hadamard transformation is a 4x4 matrix. Since we have a two qubit
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

## Qubit Values

A qubit is represented by (a, b) where a and b are complex numbers and:

```
||a²|| + ||b²|| = 1
```

Example qubit values:

```
  ⌈ 1⌉
  |--|
  |√2|
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

Now take the qubit value (1/2, √3/2):

```
(1/2)² + (√3/2)² = 0.25 + 0.8660254038² = 0.25 + 0.75 = 1
```

When we measure this qubit it will collapse to either 0 or 1 and the probability
in this case is 0.25 that it will be a zero and 0.75 that it will be a one.

Operations on qubits are done by matrix multiplications or transformations.

Now, if you imagine (1, 0) as being (x, y) then you could produce/draw a unit circle:

```
                          (0,1)

     (-1/√2,1/√2)                       (1/√2,1/√2)



 (-1,0)                                           (1,0)



   (-1/√2,-1/√2)                        (1/√2,-1/√2)


                          (0,-1)
```

You can visualize operations using this unit circle, for example the bit flip
operation on (1,0) will take you to (0,1), (1/√2, 1/√2) does nothing.
This is alright as long as we use real numbers, if we use complex numbers then
we will also have an extra z dimension and this becomes a sphere.
