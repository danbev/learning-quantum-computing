const { Circuit } = require('qiskit').sim;

const circuit = new Circuit(1);
circuit.addGate('x', 0, 0);
circuit.run(10);
console.log('x-gate measure:');
console.log(circuit.stateToString());

const c = new Circuit({ nQubits: 1 });
c.addGate('h', 0, 0);
c.addGate('z', 1, 0);
c.addGate('h', 2, 0);
c.run(10);
console.log('h-z-h-gate measure:');
console.log(c.stateToString());
