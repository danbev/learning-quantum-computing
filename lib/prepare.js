const { Circuit, gates } = require('qiskit').sim;

const circuit = new Circuit({nQubits: 1});
console.log(gates['h']);
circuit.addGate('h', 0, 0);
//circuit.addGate('h', 1, 0);
//circuit.addGate('h', 2, 0);
circuit.run();
console.log(circuit.stateToString());
