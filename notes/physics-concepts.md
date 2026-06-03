# Physics Concepts

## Interference

Observables are properties of an object that we can measure, for example the object's
position, its speed, its spin, etc.

In quantum mechanics an object in superposition is said to have all the possible
measurements at the same time.

For a normal everyday object just knowing the object position does not say anything
about the object's speed. The position of the object is said to be independent of the
speed.

If we have a particle and want to know its position the best we can do is use the
wave function to get a probability of the particle's position:

```
|Ψx> = a|x₁> + b|x₂> + c|x₃> + ...

where x is a set of all the different positions.
```

Let's say we are also interested in the object's speed. Again we only have the wave
function so it must be in the superposition just like the property x (position).
In quantum mechanics x and y are not independent, instead you can actually get the
probability of y using x!

"There is only one wave function and it knows everything there is to know about the
particle"

We can write the wave function with whatever observable we want:

```
|Ψ> =
    = a|x₁> + b|x₂> + c|x₃> + ...
    = a|y₁> + b|y₂> + c|y₃> + ...
```

## Unitary Transformations

A matrix is unitary if the following condition is satisfied:

```
U = ⌈a c⌉
    ⌊b d⌋

U† * U = U * U† = I         † = complex conjugate transpose
                            I = identity matrix
```

Taking the complex conjugate transpose is first taking the complex conjugates
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

## De Broglie Hypothesis

"Matter is a wave as well as a particle" and this formula gives us a way to
find the wavelength of the particle:

```
     h
λ =  -
     p
```

So we have a particle which has a wave function. The wave function does not only
tell us the position of the particle but also the speed/momentum of the particle.

```
momentum = speed * mass
```

```
|ψ> = a₁|slow> + a₂|fast> + a₃|faster> + a₄|warp-speed> + ...
```

What if we have a particle and it has a momentum eigenstate, how do we find its
position?

## Polarization

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

1) The first example shows the case where a vertical polarization filter is used in
which case a photon will either pass through or be blocked.

2) The second example shows two filters, first a vertical filter which like the first
case will allow some photons to pass through but all those that do will be blocked
by the second horizontal filter.

3) The third example we have the vertical filter, then a 45 degree filter, and then
the horizontal filter.

Now, just looking at the examples we can see that the second and third example are
similar but we have just added a filter in the middle. In this case we would expect
that nothing gets passed through but this is not the case!!

Now let's say we have a source `X` that produces entangled photons, so even though
we don't know what spin they have they will always produce the same spin when measured.

```
            o <--------- X ---------> o
```

And let's have three filters:

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
how to behave regardless of what filter it encounters. So the photon must contain
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
at both sites are randomly chosen.

So we have different combinations of the filters too. We can ignore the cases
when both filters are the same (as it will behave the same at both sites):

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
So we expect that 1/3 of the outcomes to be the same if there are hidden variables!
```

So if we ran the experiment 100 times we would expect the outcomes to match at least
33 times. So outcome is >= 1/3 of the time the experiment is performed.

## Bell's Theorem

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

## Einstein, Podolsky and Rosen (EPR)

In 1935, Albert Einstein collaborated with Boris Podolsky and Nathan Rosen and published
a paper where they stated that quantum mechanics (QM) is incomplete because there existed
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

## The Heisenberg Uncertainty Principle (HUP)

One way of looking at this is to visualize a graph that only has one peak. The probability
of finding the particle under/within that area is very high. But it is not easy
to find the frequency, there is only one peak so we don't know much about it really.
Take another graph where there are many peaks. Now we can predict/determine the
frequency with pretty good accuracy but now the possible places to find the particle
are more.

## Position Eigenstate

Just means that the particle will actually be in this location with 100% certainty.
