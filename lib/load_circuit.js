const { Circuit } = require('qiskit').sim;

const circuit = new Circuit({nQubits: 2});
circuit.addGate('cx', 0, 1);
circuit.addGate('h', 1, 0);

circuit.run();
console.log(circuit.stateToString());
