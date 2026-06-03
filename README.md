# Learning Quantum Computing

This project exists to help me learn about quantum computing.

## Notes

### Fundamentals

- [Bra-Ket (Dirac) Notation](notes/bra-ket-notation.md) - Vector notation, kets, bras, inner products, complex conjugates
- [Qubits and Complex Vector Spaces](notes/qubits.md) - Qubit representation, multiple qubits, magnitude, basis vectors, eigenvalues
- [Tensor Product](notes/tensor-product.md) - Combining vectors for multi-qubit systems
- [Superposition and Normalization](notes/superposition.md) - Superposition states, normalization, probability
- [Measurement](notes/measurement.md) - Measurement, probability, collapse, polarization

### Visualization

- [Bloch Sphere](notes/bloch-sphere.md) - Visualizing qubit states on the Bloch sphere
- [Phase](notes/phase.md) - Phase, global phase, quantum state equivalence

### Quantum Gates

- [Quantum Gates](notes/gates.md) - Pauli gates, Hadamard, CNOT, Toffoli, phase gates, reversible gates

### Quantum Phenomena

- [Entanglement](notes/entanglement.md) - Entangled states, creating entanglement
- [Physics Concepts](notes/physics-concepts.md) - Interference, Bell's theorem, EPR, Heisenberg uncertainty principle
- [Wave Mechanics](notes/wave-mechanics.md) - Standing waves, wavelength, photon energy, wave function, photoelectric effect

### Hardware

- [Physical Qubits](notes/physical-qubits.md) - Superconducting qubits, physical implementations, decoherence

### Algorithms

- [Quantum Algorithms](notes/algorithms.md) - Deutsch, Deutsch-Jozsa, Grover's, Shor's

### Tools and Libraries

- [Qiskit Aer](notes/qiskit-aer.md) - Building and running Qiskit Aer simulator
- [Qiskit WASI](notes/qiskit-wasi.md) - Compiling Qiskit for WebAssembly/WASI
- [BLAS](notes/blas.md) - Basic Linear Algebra Subprograms
- [Spin](notes/spin.md) - Particle spin as intrinsic angular momentum
- [Schrödinger](notes/schrodinger.md) - Schrödinger's equation and wave functions

## Code

### C++

- [src/bell.cc](src/bell.cc) - Bell's inequality analogy with classical data
- [src/blas_dgemm.c](src/blas_dgemm.c) - BLAS dgemm matrix multiplication example

### JavaScript (legacy)

The `lib/` directory contains old JavaScript experiments using jsqubits/qiskit-js.
These are kept for reference but are not actively maintained. The goal is to
move towards C++ based experimentation.
