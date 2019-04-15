const { Circuit, Gate } = require('qiskit').sim;

const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.y, 0, 0).run();
console.log(circuit.state, circuit.state.toString());
