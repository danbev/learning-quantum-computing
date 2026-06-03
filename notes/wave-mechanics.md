# Wave Mechanics

## Standing Waves

I've taken notes about this and there is a good section about this on
[Khan Academy](https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/standing-waves-ap/a/standing-waves-review-ap?modal=1).

## Wavelength

```
     c                c = speed of light
λ =  -                f = frequency
     f
```

## Photon Energy

```
E = hf               h = Planck's constant
                     f = frequency
                     E = photon energy
```

## Wave Function

```
Ψ = wave function (depends on time...and other things)
```

## Postulates

```
(I) The state of a quantum object is completely specified by the wave function
Ψ(x). This is a complex function. This is a function of position.

(II)
The wave function means that the probability of finding the object at a point x,
upon measurement, is equal to the norm/length/magnitude squared ψ(x):
P(x) = |ψ(x)|²
The total probability has to be normalized. So this function gives the probability
density
```

## Photoelectric Effect

Hertz (1887) shined light against metal plates, high energy beams of light and
noticed that electrons were released. The electrons that are released are sometimes
called photo electrons but are still just electrons. They were released due
to a photon which is why it is called the photo-electric effect. This will
produce a photo-electric current.

Electrons were only released when the light reached a certain frequency, before
that no electrons were released. There is a threshold frequency ν₀ (Greek letter
nu). So the frequency has to be greater than ν₀, ν > ν₀.

The type of metal also affects this, as there is energy involved to free the
electrons, called the work function. So ν₀ depends on the metal and the configuration
of atoms at the surface of the metal.

The magnitude of the current was proportional to the intensity of the light. I
think this means that the number of photos released is related to the intensity
but not the actual energy.

The energy of the photo-electrons was independent of the intensity of the light.

Einstein 1905: light is composed of quanta (later became known as photons) where:

```
E = hν           E = energy, h = Planck's constant, ν = frequency (nu)
```

```
E_e = 1/2 mv² = E_q - W = hν - W             W = work function
```

```
        h
ħ = h_bar = --
        2π

ħ * c = 200 MeV * fm                 fm = fermi = 10^-15
```

## Dimensional Analysis of Planck's Constant

```
       [E]               E = Energy           M = mass
[h] =  ---               ν = frequency        L = length
       [ν]               h = Planck's constant T = time

[V] = 1/T               frequency: cycles per unit time

[E] = M * L²/T²

[h] = (M * L²/T²) / (1/T) = M * L²/T

    = L * (ML/T)

    = [r] [p]                             r = radius/length, p = momentum
    = this is the angular momentum
```

## Interferometer and Interference

Take the following example:

```
                  (mirror)
α                  +----+
  \                 /  \                 /
   +---------------+    +---------------+
   |Beam Splitter 1|    |Beam Splitter 2|
   +---------------+    +---------------+
  /                 \  /                 \
β                  +----+
                   (mirror)
```

Beam Splitter 1:

```
1 ⌈-1 1⌉
--⌊1  1⌋
√2
```

Beam Splitter 2:

```
1 ⌈1  1⌉
--⌊1 -1⌋
√2
```

The output of this system is:

```
output = (BS2 matrix)(BS1 matrix)⌈α⌉
                                 ⌊β⌋
```

So let's take a concrete example and pass in |1>:

```
                  (mirror)
                   +----+                 1
                    /  \                 /
   +---------------+    +---------------+
   |Beam Splitter 1|    |Beam Splitter 2|
   +---------------+    +---------------+
  /                 \  /                 \
⌈0⌉                +----+                 -0 (=0)
⌊1⌋                (mirror)
```

The result of the first beam splitter will be:

```
1 ⌈-1 1⌉ ⌈0⌉   1 ⌈1⌉  ⌈0.707106⌉
--⌊1  1⌋ ⌊1⌋ = --⌊1⌋ =⌊0.707106⌋
√2             √2

⌈0.707106⌉² + ⌊0.707106⌋² = 1
      0.5   + 0.5         = 1
```

So we take the result and "pass" it through the second beam splitter:

```
1 ⌈1  1⌉ ⌈0.707106⌉   1  ⌈0.707106 +  0.707106⌉
--⌊1 -1⌋ ⌊0.707106⌋ = -- ⌊0.707106 + -0.707106⌋
√2                    √2

                      1  ⌈1.4142⌉
                    = -- ⌊0     ⌋
                      √2

                      ⌈1⌉
                    = ⌊0⌋
```
