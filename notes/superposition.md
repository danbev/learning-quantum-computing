# Superposition and Normalization

## Superposition

A qubit is represented by a 2d vector space of the complex numbers C². So far we
have only been using real numbers. So a qubit can be in one of the following
states:

```
|0>
|1>
|ψ>
```

The superposition state can be specified as:

```
|ψ> = α|0> + β|1>
```

Where α and β are complex numbers which together obey:

```
|α|² + |β|² = 1
```

Using polar notation this would be:

```
          0           0
|Ψ> = cos - |0> + sin -  e^iΦ|1>
          2           2
```

The first number can be visualized as the Z component and an increase in
this number will increase the angle from the north pole outwards. That angle can
go up to π (180 degrees). π/2 is half and would be like 90 degrees, like
a vector pointing somewhere on the equator. In the example above both theta and
phi are 0 so this is the polar representation for |0>.

Notice that the operation is cosine and cos(0) = 1. So there is no angle and the
vector is from the origin straight up to the north pole of the sphere. And this
also means that sin(0) is 0. Also notice that the second part is just that sin(θ/2).
Notice one thing about the state (|0> and |1>) which are the two states that
can be obtained when measuring. If we visualize this in two dimensions we get:

```
                  ^
   ⌈0⌉        |1>-|
   ⌊1⌋            |
                  |
                  |
           ---------------|--->
   ⌈1⌉                    |0>
   ⌊0⌋
```

So above we are showing |0> and |1> and notice that they are orthogonal to each
other (that is 90 degree angles). But in a Bloch sphere the |0> state is north
and |1> is south, that is they are 180 degrees apart. When we see a state like:

```
          0           0
|Ψ> = cos - |0> + sin -  e^iΦ|1>
          2           2
```

Specifying cos and sin with (θ/2) is to account for this.

## Normalization

Now we will create a graph combining Ψ₁ and Ψ₂:

```
               0.5Ψ₁ + 0.5Ψ₂
```

We want to normalize this equation so that the length of these vectors are 1,
so that the square roots of them become 1 (which they currently do not).

```
0.5²+0.5² = 0.25 + 0.25 = 0.50
```

We need to normalize these values which can be done by:

```
            ^
            |
        0.5 -    *
            |
            +----|---->
                0.5

magnitude  = √(0.5² + 0.5²) = √(0.25 + 0.25) = √0.5 = 0.707106
u_hat = (0.5/0.707106, 0.5/0.707106) =  (0.707106, 0.707106)
```

Any time you need to normalize you can take the scalar and divide by the
magnitude of the value in the unit vector (value).

```
               0.707Ψ₁ + 0.707Ψ₂
               (√2/2)  + (√2/2)
```

So our vector will look like: (0.707, 0.707) and the graph says that it
consists of equal parts of Ψ₁ and Ψ₂ and the length will be 1:

```
0.707106² + 0.707106² = 1
```

This will give us a vector with x being 0.707106, and y being 0.707106 which
is a 45 degree angle and a length of 1:

```
            ^
            |
   0.707106 |      *
            |
            |
            +------|-->
                   0.707106
```

I think that normalizing makes it easier to do calculations later as we have
a length of 1 and we don't have to account for different lengths or the vector
(r, magnitude), we can just use the x,y values of the sine/cosine.

A qubit can be in the state of Ψ₁, or Ψ₂, or a combination of both.

Not sure if significant or not but (√2/2, √2/2) is 45 degrees (π/4) on the
unit circle.

Since this vector is now normalized and on the unit circle we can also write
this vector as:

```
|Ψ> = cos(Θ)|0> + sin(Θ)|1> = ⌈cos(Θ)⌉
                              ⌊sin(Θ)⌋
```

Now, sin(θ) could also be written as:

```
sin(Θ) = cos(π/2 - Θ)
```

Using our above example of a (√2/2, √2/2) or (0.707, 0.707):

```
sin(45) = 0.707
cos(π/2 - 45) = 0.707
```

And when we measure, the vector will be projected to either the |0> or
|1> (ground or excited state):

```
|0> with probability of cos²(Θ)
|1> with probability of sin²(Θ)
```

## Superposition and Measurement

Imagine having a coin that when in the air is in both heads or tails state, like
if you could see it in mid air you would see both states. But as soon as it lands
it will be either 0 or 1 as the superposition collapses. The wave function gives
a probability of if the outcome will be 0 or 1 but that is only a probability, it
does not tell you for certain the outcome (unless the probability is 0 or 1
I guess).

So a classic bit can store either a 0 or a 1.
A qubit can store a 0 and a 1 at the same time (2¹ = 2).

A 2-bit classic computer can store:

```
00
01
10
11
```

But only one of these states (0, 1, 2, 3).

A 2-bit qubit can store 2² = 4 values simultaneously. So it can store 0, 1, 2, 3
at the same time. But this is under the assumption that we don't inspect the
value as it would then collapse and only be in one state, would it not?
How do the qubits get used in algorithms?
