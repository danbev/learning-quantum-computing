const { Circuit, Gate } = require('qiskit').sim;

const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.x, 0, 0).run();
console.log('x-gate measure:');
console.log(circuit.stateToString());

const c = Circuit.createCircuit(1);
c.addGate('h', 0, 0).addGate('z', 1, 0).addGate('h', 2, 0).run();
console.log('h-z-h-gate measure:');
console.log(c.stateToString());
