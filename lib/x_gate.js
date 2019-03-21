const { Circuit } = require('qiskit').sim;

const circuit = new Circuit(1);
circuit.addGate('x', 0, 0);
circuit.run(10);
console.log(circuit.state);
