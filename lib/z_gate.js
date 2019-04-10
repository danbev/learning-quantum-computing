const { Circuit, gates } = require('qiskit').sim;

console.log('Z gate: ', gates['z']);
const circuit = new Circuit(1);
circuit.addGate('z', 0, 0);
circuit.run();
console.log(circuit.state, circuit.state.toString());
