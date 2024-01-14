#### Schrödinger's Equation
Is a tool to understand how a particles wave function changes at different
points in space and how it evolves over time. One would solve the equation for
a specific particle interacting with a physical system and the result is a wave
function for that particle.

The time-dependent Schrödinger equation is:
```
iħ ∂Ψ(x,t) = HΨ(x,t)
   --
   ∂t

i = imaginary number
ħ = h/2π, h = Planck's constant, this is called the reduced Planck's constant
Ψ = is function of location x and time t.
H = Hamiltonian operator (^ = operator)
∂Ψ(x,t) = partial derivative of Ψ(x,t) with respect to x and t
```

The time-dependent Schrödinger equation with the kinetic and potential energy
terms separated. This information is contains in the Hamiltonian operator.
```
iħ(∂/∂t)Ψ(r, t) = [-ħ²/(2m)∇² + V(r)] Ψ(r, t)

ħ = represents the reduced Planck constant (h-bar).
(∂/∂t) = is the partial derivative with respect to time.
Ψ(r, t) = is the wave function, depending on position r and time t.
Ψ = is function of location x and time t.
[-ħ²/(2m)∇² + V(r)] = represents the operator with kinetic energy (involving the
                      Laplacian ∇²) and potential energy V(r).
```
The solution to the equation is a wave function, Ψ(x,t), which describes the
quantum state of the particle.

So with the output of the Schrödinger equation, the wave function, describes the
quantum state of the particle.

If we take the square of the wave function (|Ψ|²) that tells us the probability
density of finding the particle at a given point. This is a probability
distribution and tells us the probability of finding the electron is a region.
Think of when we have an LLM where we get a probability distribution of the next
token to predict. There is a set of positions (a region) where the electron is
likely to be found. These regions are called orbitals. Orbitals don't imply that
any motion like obiting they only describe the probability of finding the
electron in a region. They are like probability "clouds".

TODO: Add details about orbitals
