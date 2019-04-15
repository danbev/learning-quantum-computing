const { Circuit, Gate } = require('qiskit').sim;

console.log('Z gate: ', Gate.z);
const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.z, 0, 0).run();
console.log(circuit.state, circuit.state.toString());
