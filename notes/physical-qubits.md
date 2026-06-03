# Physical Qubits

## Superconducting Transmon Qubits

The physical qubit used in IBM Q is called a superconducting transmon qubit. This
needs to be cooled down to 15 milliKelvin in a dilution refrigerator so that there
is no noise or heat to excite the qubit.

## Physical Representations

A qubit can take on a value of either 0 or 1 just like a normal bit. They can
be represented physically as:

* The spin of a particle in a magnetic field where up means 0 and down means 1
* The polarization of a single photon where horizontal polarization means 1
  and vertical polarization means 0. So this is basically building the computer
  using light.

## Superconductors

The great thing about superconductors is that electricity flows without any loss,
so a current in a closed loop can theoretically flow forever.

In a qubit made of a superconductor loop, a current oscillates back and forth
around a loop. A microwave is injected which excites the current into a superposition of states.

This design is used by IBM's cloud platform Q Experience and is also used by
Google and a private venture called Quantum Circuits, Inc. (QCI).

## Decoherence

The measurement gate takes a qubit in a superposition of states as input and
spits out either a 0 or 1.

Regarding this probability, I was wondering how we can compute using it - I mean
there is no guarantee that we find a value in a particular state even though the
probability is high. Right, but if you have many particles then you can use
the probability.

Measurement.
We have learnt that measuring the state will collapse the wave function and this
happens all the time to particles when they get hit by light or other interaction.
This is why we don't see things in superposition state in everyday life and also
why it is so hard to create a quantum computer. They need to isolate the particle
to avoid interference with the outside environment.

The coefficients in the wave function can be complex numbers, for example:

```
|Ψ> = (d+ei)|state1> + ...

d = real number
e = number of units in the imaginary dimension
```
