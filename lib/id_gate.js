const { Circuit, Gate } = require('qiskit').sim;

console.log(Gate.id);
const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.id, 0, 0).run();
console.log(circuit.stateToString());
