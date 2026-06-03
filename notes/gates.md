# Quantum Gates

Just like the `not`, `and`, `or`, `xor`, `nand` etc gates in classical computers there are
gates in quantum computers as well. These gates operate on a set of inputs
and produce a set of outputs. But they can operate on all the states of the qubit
at the same time by using matrix transformations.

There are 4 operations on a single classical bit:

```
1) Set it to 1
2) Set it to 0
3) Negate/Not~
4) Identity (multiplied by 1)
```

An operator is just a 2x2 matrix and a gate is most often multiple operators
chained together.

## Classical Gates

A component that receives two incoming electric currents, compares them, and
sends on a new outgoing electric current depending on the comparison made.

## Measurement Gate

This gate takes a qubit in superposition as input and outputs either 0 or 1.
I think the wave function is used to get a probability if the output will be
0 or 1.
As measuring/observing a qubit alters its state this should be the last act on a
quantum circuit.

## Pauli-X (NOT)

Inverter which implements logical negation. It is equivalent to a 180 degree
rotation around the x-axis of the Bloch sphere.

```
 ⌈0 1⌉⌈1⌉  = ⌈0⌉       ⌈0 1⌉⌈0⌉  = ⌈1⌉
 ⌊1 0⌋⌊0⌋    ⌊1⌋       ⌊1 0⌋⌊1⌋    ⌊0⌋
```

|0> -> |1>
|1> -> |0>

It is named after Wolfgang Ernst Pauli who won the Nobel prize in 1945.

Lets go back to our two dimensional vector space and see what a transformation
looks like there:

```
The base vectors are:
x is ⌈1⌉ and for y we have ⌈0⌉
     ⌊0⌋                   ⌊1⌋

Now, we put these two in a matrix:
⌈1 0⌉
⌊0 1⌋
```

```
⌈0 1⌉⌈cos(0/2)       ⌉ = ⌈0 * cos(0/2) + sin(0/2) * e^i0⌉ = ⌈0⌉
⌊1 0⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) + 0 * sin(0/2) + 0   ⌋ = ⌊1⌋

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

## Pauli-Y

```
⌈0 -i⌉⌈cos(0/2)       ⌉ = ⌈0 * cos(0/2) + -1 sin(0/2) * e^i0 ⌉ = ⌈0 ⌉
⌊i  0⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * i + 0 * sin(0/2) * e^i)⌋   ⌊1i⌋
```

## Pauli-Z

```
⌈1  0⌉⌈cos(0/2)       ⌉ = ⌈1 * cos(0/2) + 0 * sin(0/2) * e^i0 ⌉ = ⌈1⌉
⌊0 -1⌋⌊sin(0/2) * e^i0⌋   ⌊cos(0/2) * 0 + -1 * sin(0/2) * e^i)⌋   ⌊0⌋
```

## Identity

```
⌈1 0⌉⌈1⌉  = ⌈1⌉   ⌈1 0⌉⌈0⌉ = ⌈0⌉
⌊0 1⌋⌊0⌋    ⌊0⌋   ⌊0 1⌋⌊1⌋   ⌊1⌋
```

Is reversible. If we know the outcome and the operation we can reverse this.
Notice that the transformation comes first which in this case is the identity
matrix, and the input which is the vector.

## S Gate (Phase Gate)

90 degree (π/2) rotation around z-axis:

```
⌈1 0⌉⌈1⌉ = ⌈1 * 1 + 0 * 0⌉ = ⌈1⌉
⌊0 i⌋⌊0⌋   ⌊0 * 1 + 1 * i⌋   ⌊0⌋

⌈1 0⌉⌈0⌉ = ⌈0 * 1 + 0 * 0⌉ = ⌈0 ⌉
⌊0 i⌋⌊1⌋   ⌊0 * 0 + 1 * i⌋   ⌊1i⌋
```

Remember that the magnitude does not take the imaginary part into account so
the outcome is not affected by these rotations/phase shifts.

## S-dagger

-90 degree (π/2) rotation around z-axis:

```
⌈1  0⌉
⌊0 -i⌋
```

## T Gate

45 degree (π/4) rotation around z-axis:

```
⌈1      0⌉
⌊0 e^iπ/4⌋
```

Note that this is called `r4` in qiskit-sim. Rotate/phase shift π/4.

## T-dagger

-45 degree (π/4) rotation around z-axis.

All gates that rotate less than 180 degrees always rotate around z!

## Hadamard Gate

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
|0> + |1>
----------
   √2
```

This last confused me a little, so lets break it down:

```
              ⌈1⌉   ⌈0⌉    ⌈1⌉
|0> + |1>     ⌊0⌋ + ⌊1⌋    ⌊1⌋    ⌈1/√2⌉
---------- =  --------- = ----- = ⌊1/√2⌋
   √2            √2        √2
```

Remember we are just dealing with vectors but in ket notation. In this case we
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

⌈1/√2   1/√2⌉⌈1/√2⌉ = ⌈1/√2 * 1/√2 + 1/√2 * 1/√2⌉     = ⌈0.5 + 0.5⌉ = ⌈1⌉
⌊1/√2 -1/√2⌋⌊1/√2⌋   ⌊1/√2 * 1/√2 + 1/√2 * (-1/√2)⌋    ⌊0.5 - 0.5⌋   ⌊0⌋
```

The Hadamard matrix takes:

```
|0>+|1>          |0>-|1>
------- -> |0>   ------  -> |1>
  √2               √2
```

When the Hadamard gate is applied to the |0> state it has its own symbol which is
|+>:

```
|+> = 1/√2 (|0> + |1>)
|-> = 1/√2 (|0> - |1>)
```

## Toffoli Gate (CCNOT)

Two control qubits and one target qubit. If both of the control qubits are 1 then
the target qubit will be flipped (the NOT gate).

### Constant-0

```
f(x) = 0    0 -> 0     ⌈1 1⌉⌈1⌉  = (1*1 + 0*1  = (1     (1 1  (0   = (0*1 + 1*1  = (1
            1 -> 1     ⌊0 0⌋⌊0⌋    1*0 + 0*0)    0)     0 0)  1)     0*0 + 0*1)    0)
```

Is not reversible. If we know the outcome and the operation we still can't know
the input value, it would be either 0 or 1.

### Constant-1

```
f(x) = 1    0 -> 1    (0 0  (1  = (0         (0 0  (0  = (0
            1 -> 1     1 1)  0)    1)         1 1)  1)    1)
```

Is not reversible. If we know the outcome and the operation we still can't know
the input value, it would be either 0 or 1.

Quantum computers only use reversible operations.
Also all operations are their own inverse, so if you apply the operation twice
you get back the input value.

## Controlled NOT (CNOT)

This is a gate that operates on a pair of qubits, one which is the control qubit
and the other the target qubit. If the control qubit is 1 then the target qubit is
flipped. And if the control qubit is 0 then the target qubit is left unchanged.
The control qubit is never updated.

```
00 ---> 00             Control qubit is 0 so nothing changes
01 ---> 01             Control qubit is 0 so nothing changes
10 ---> 11             Control qubit is 1 so flip the target qubit
11 ---> 10             Control qubit is 1 so flip the target qubit
```

```
condition/control matrix:
C = ⌈1 0 0 0⌉
    |0 1 0 0|
    |0 0 0 1|
    ⌊0 0 1 0⌋

    ⌈1 0 0 0⌉⌈1⌉   ⌈1⌉
    |0 1 0 0||0| = |0|
    |0 0 0 1||0|   |0|
    ⌊0 0 1 0⌋⌊0⌋   ⌊0⌋

    ⌈1 0 0 0⌉⌈0⌉   ⌈0⌉
    |0 1 0 0||1| = |1|
    |0 0 0 1||0|   |0|
    ⌊0 0 1 0⌋⌊0⌋   ⌊0⌋

    ⌈1 0 0 0⌉⌈0⌉   ⌈0⌉
    |0 1 0 0||0| = |0|
    |0 0 0 1||1|   |0|
    ⌊0 0 1 0⌋⌊0⌋   ⌊1⌋

    ⌈1 0 0 0⌉⌈0⌉   ⌈0⌉
    |0 1 0 0||0| = |0|
    |0 0 0 1||0|   |1|
    ⌊0 0 1 0⌋⌊1⌋   ⌊0⌋
```

Notice that the lower left corner is:

```
⌈0 1⌉
⌊1 0⌋
```

And that this is the X operator (swap/exchange). The rest of the matrix is
for the control operation.

We can visualize this as:

```
q[0] --------*---------- q[0]       control qubit
             |
q[1] -------(+)--------- q[1]       target qubit
```

But recall that the state is really the tensor product and the CNOT gate is
just matrix multiplication (the operation).

```
        ⌈1 0 0 0⌉ ⌈0⌉   ⌈0⌉
C|10> = |0 1 0 0| |0| = |0| = |11>
        |0 0 0 1| |1|   |0|
        ⌊0 0 1 0⌋ ⌊0⌋   ⌊1⌋
```

Example:

```qasm
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
a -----------*---------- a              control qubit
             |
b ----------(+)---------- b (+) a       target qubit
```

The CNOT gate is similar to the NAND gate in classical computing which can be
used to build all other gates.

## Swap Gate

Takes 2 qubits and swaps their state:

```
     ⌈1 0 0 0⌉
S =  |0 0 1 0|
     |0 1 0 0|
     ⌊0 0 0 1⌋
```

## Physical Single Qubit Gates (u1, u2, u3)

```
|φ> = cos(θ/2) * |0> + sin(θ/2) e^(iΦ) * |1>
```

The following is the most general form of a single qubit unitary matrix:

```
U = ⌈cos(θ/2)          -e^(iλ)sin(θ/2)⌉
    ⌊e^(iΦ)sin(θ/2)   e^(i(λ+Φ))cos(θ/2)⌋
```

So we can imagine a function named U that takes these parameters:

```
U(theta, phi, lambda)
```

`u1` takes one parameter which is λ:

```
gate u1(lambda) q { U(0,0,lambda) q; }
```

The first two arguments, which are zero above, are the `theta` and `phi` parameters.
This is then used in the general U matrix like this:

```
U = ⌈cos(0/2)          -e^(iλ)sin(0/2)⌉
    ⌊e^(i0)sin(0/2)   e^(iλ+i0)cos(0/2)⌋

U = ⌈1     0⌉
    ⌊0  e^iλ⌋
```

Now, let's take a look at the T gate again which is a 45 degree (π/4) rotation
around z-axis:

```
⌈1      0⌉
⌊0 e^iπ/4⌋
```

Notice that this is basically:

```
U1(π/4)
```

And if we take a look at the T gate in qiskit-qasm we find:

```
gate t a { u1(pi/4) a; }
```

```
gate u3(theta,phi,lambda) q { U(theta,phi,lambda) q; }
```

## Reversible Gates

I've mentioned previously that all gates in a quantum system need to be reversible
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

Now, if we have the zero state and drill a hole in the divider the water will
start to leak out and this would be used to drive some sort of motor/turbine. This
is where energy is leaving the system which is erasing information and is an irreversible
process. Writing information, putting the system into different states is reversible
as long as we know the previous state. We can go from the unknown state to |0>
to unknown and back again to |0>.

A computer that is reversible and does not erase information does not use any
energy.

Take the controlled NOT gate (CNOT):

```
⌈1 0 0 0⌉
|0 1 0 0|
|0 0 0 1|
⌊0 0 1 0⌋
```

Let's say that we have a 2 qubit system with the qubits named `x` and `y`:

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
