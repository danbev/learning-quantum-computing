# Tensor Product

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

This is a method of combining vectors and is how multiple qubits are represented.
Notice that the binary number of the value/label in the ket can be used as an
index to know where the one will be. For example, `|11>` is the decimal value
of 3, so this means that the `1` will be in the third position (starting from
zero) as in `0001`.

## General Tensor Product

So a tensor b is:

```
X = tensor product

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

## Tensor Product and Entanglement

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
                             ⌊1⌋ <--- the coefficient of Ψ₂
|1> in bra-ket notation.
0% Ψ₁ and 100% Ψ₂.
```

## Hadamard Tensor Itself

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

Notice the order of the Hadamard gate and the identity gate. The first will not
affect the bottom qubit, and the second will not affect the top qubit.

## Tensor Product for Hadamard on 2 Qubits

```
   ⌈1  1⌉     ⌈1 0⌉
H =⌊1 -1⌋ I = ⌊0 1⌋

  1⌈1 0⌉  1⌈1 0⌉       ⌈1  0  1  0⌉
   ⌊0 1⌋   ⌊0 1⌋     1 |0  1  0  1|
                   =-- |1  0 -1  0|
  1⌈1 0⌉ -1⌈1 0⌉    √2 ⌊0  1  0 -1⌋
   ⌊0 1⌋   ⌊0 1⌋
```
