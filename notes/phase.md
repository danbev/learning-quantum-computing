# Phase

## Phase

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

Negative numbers are phase π (180 degrees):
-|-|-|-|-|-|-|----
  -2-1 0
```

## Global Phase

The states |u> and -|u> are indistinguishable. There is no physical experiment
that can tell them apart.
Also the state |u> and i|u> are indistinguishable.
And the state |u> and c|u> are indistinguishable whenever c is a complex
number of magnitude 1 (this c is called a global phase).

Is this as simple as multiplying:

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

## Phase and Measurement

Notice that the magnitude does not take the imaginary part into account so
the outcome is not affected by these rotations/phase shifts.

## Quantum State Equivalence

Notice that a quantum state superimposed upon itself does not change its
physical meaning:

```
|A> ≅ 2|A> ≅ -1|A> ≅ i|A>
```

This would just be scaling the vector in some manner but when we measure it
would give the same result. This is true as long as the coefficient is non-zero.

```
α|A> + β|B>
```

The polarization state of a photon can be expressed using only two terms, but
in the above we have four terms. But if what we said above that the overall
coefficient does not matter:

```
1        1        α       β             β
- α|A> + - β|B> = - |A> + -|B> = 1|A> + -|B>
α        α        α       α             α
```
