const { Circuit, Gate } = require('qiskit').sim;

const circuit = Circuit.createCircuit(2);
circuit.addGate(Gate.cx, 0, 1).addGate(Gate.h, 1, 0).run();
console.log(circuit.stateToString());
