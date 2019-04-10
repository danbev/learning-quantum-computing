const { Circuit } = require('qiskit').sim;

const circuit = new Circuit(1);
circuit.addGate('y', 0, 0);
circuit.run();
console.log(circuit.state, circuit.state.toString());
