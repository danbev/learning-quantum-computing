const { Circuit, gates, Gate } = require('qiskit').sim;

console.log(Gate.cx);
console.log(Gate.h);
const circuit = Circuit.createCircuit(2);
circuit.addGate(Gate.h, 0, 0).addGate(Gate.cx, 1, [0, 1]).print();
circuit.run();
console.log(circuit.stateToString());
