# Quantum Algorithms

## Deutsch Oracle Algorithm

Invented by David Deutsch. We want to figure out if operation `f` is constant or
balanced, but we are only allowed to try different inputs and inspect the output.
The function is constant if the output is independent of the input, and it is
balanced if it is dependent.

This can be written as:

```
f : {0, 1} --> {0, 1}
```

So `f` is a function that takes 0 or 1 as input and outputs 0 or 1.

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

How can we figure out what operation `f` is?

On a classical computer we need:

```
f(0) ----> 0 (either identity or constant 0)
f(1) ----> 0 (f must be constant 0)

f(1) ----> 1 (either identity or constant 1)
f(0) ----> 1 (we know the operation is constant 1)
```

So we would have two operations minimum to figure out what the function `f` is.

The function f could be viewed as a matrix. For example, let's say that f does:

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
⌈0 1⌉⌈1⌉ = ⌈0 * 1 + 1 * 0⌉ = ⌈0⌉
⌊1 0⌋⌊0⌋   ⌊1 * 1 + 0 * 0⌋   ⌊1⌋

⌈0 1⌉⌈0⌉ = ⌈0 * 0 + 1 * 1⌉ = ⌈1⌉
⌊1 0⌋⌊1⌋   ⌊1 * 0 + 0 * 1⌋   ⌊0⌋
```

## Reversible Oracle

To have a gate that operates on two qubits we would use:

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
```

## Quantum Circuit Setup

We setup the state of this two qubit system by first setting qubit 1/wire 1 to the
excited/|1> state, and then applying the Hadamard gate to both which gives the
following state:

```
0.5+0i|00>25%        ⌈ 1⌉     |00> - |01> + |10> - |11>     |0> + |1>  |0> - |1>
-0.5+0i|01>25%  = 1/2|-1| =   ------------------------- = ( -------- )(---------)
0.5+0i|10>25%        | 1|                2                     √2         √2
-0.5+0i|11>25%       ⌊-1⌋
```

So the state of the system is the input to our oracle function (the matrix)
that we created above. We set this up so that each we have an equal chance of
|00>, |01>, |10>, |11>.

```
 |0> + |1>   |0> - |1>
( -------- )(---------)
     √2         √2
```

Let's ignore that the first qubit is in the superposition and just leave it as x.
And the second qubit performs |y XOR f(x)>:

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

Or as a single coefficient:

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
 |0> + |1>   |0> - |1>
( -------- )(---------)
     √2         √2
```

So this would become:

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

The Hadamard matrix takes:

```
|0>+|1>          |0>-|1>
------- -> |0>   ------  -> |1>
  √2               √2
```

So after applying the Hadamard gate to the first qubit that should put it
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

Now, if we factor this tensor product it would give:

```
0 ⌈-0.707106⌉    ⌈0        ⌉
  ⌊ 0.707106⌋    |0        |
               = |-0.707106|
1 ⌈-0.707106⌉    ⌊ 0.707106⌋
  ⌊ 0.707106⌋
```

## Constant Functions

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

Again, applying the Hadamard to x will now give |0>.

## Complete Circuit

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

We now measure the top qubit `x` and if it is in the |0> state Uf is a constant
function and if not it is a balanced function.

## Deutsch-Jozsa Algorithm

Similar to the Deutsch-Oracle algorithm but instead of just checking/determining
if a single function is constant or balanced we are concerned with if the input
of {0, 1}² are constant or balanced.

The Deutsch Oracle algorithm deals with:

```
f : {0, 1} --> {0, 1}
```

The Deutsch-Jozsa algorithm deals with `{0, 1}ⁿ` inputs:

```
f : {0, 1}ⁿ --> {0, 1}
```

So instead of just a single input value we have `n`. Just to be clear on this,
the input is a string or an array of zeros and ones. There is still a function
f that is run for each of the inputs. It is the result from running `f` which
we check the resulting array of zeros or ones to see if the function is constant
or balanced.

## Grover's Algorithm

Say you have to search a list of items. You would on average have to search
N/2 and in the worst case N times to find it. So if we have 8 items best case
would be to have to look at 4 items and worst case 8.

With a quantum computer we can find the item of interest in √N = √8 = 2.8284 times.

To be able to search in a quantum computer we need to encode the search as a
binary encoding of the items:

```
x, w ∈ {0, 1}ⁿ
N = 2ⁿ

Let's say n is 2. That would give N=4:
⌈0 or 1⌉
|0 or 1|
|0 or 1|
⌊0 or 1⌋

Uf|x> = (-1)^f(x)|x>
f(x) = 0:
       (-1)⁰|x>
       1|x>
       Notice that in this case nothing happens. The value is multiplied with
       1 which is the same as a no-op.
f(x) = 1:
       (-1)¹|x>
       -1|x>
       In this case it will switch/reflect/"rotate" the value
```

Before looking at the list of items we have no idea of where the item we are
looking for is. So any location is possible.

```
    1  N-1
|s> -- ∑ |x>
    √N x=0

So |x> is in bracket notation, that is a vector. We are adding these vectors,
and then multiplying that value with 1/√N.

Let's say N is 2² = 4:
    1  4-1
|s> -- ∑ |x>
    √4 x=0
```

If we measure the state it would collapse to any one of the basis states
(|00>, |01>, |10>, or |11>) with an equal probability of 1/N = 1/2ⁿ.
In our case this would be 1/4.

How do we increase this probability?

### Amplitude Amplification

In this case we want to stretch out the amplitude of the target state.

### Uniform Superposition

```
|s> = H^⊗n|0>ⁿ
```

So this is zero state to the power of n, Hadamard tensored with itself n times.

## Shor's Algorithm

The task is to factor an integer `N` into `d` decimal digits. The brute force
method would have to go through all primes up to √N and see if the prime divides
`N`.

What is done instead is to reduce the problem into another one called period-finding.

So let's make N = 35, and q = 5 and p is 7.
So we have our two prime numbers which multiplied together are 35.
And let's say our key bit size is 48 (for no particular reason):

```
N = 35
q = 5
p = 7
x mod N, x² mod N, x³ mod N, ...

So let's just take a random x value, 3:
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

(p-1)(q-1) = (7-1)(5-1) = (6)(4) = 24
```
