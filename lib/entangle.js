const { Circuit, gates } = require('qiskit').sim;

console.log(gates['cx']);
console.log(gates['h']);
const circuit = new Circuit({nQubits: 2});
circuit.addGate('h', 0, 0);
circuit.addGate('cx', 1, 0);

circuit.run();
console.log(circuit.stateToString());
