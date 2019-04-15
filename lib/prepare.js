const { Circuit, Gate } = require('qiskit').sim;

const circuit = Circuit.createCircuit(1);
console.log(Gate.h);
circuit.addGate(Gate.h, 0, 0).run();
console.log(circuit.stateToString());
