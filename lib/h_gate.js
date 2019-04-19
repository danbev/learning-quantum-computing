const math = require('mathjs');
const { Circuit, Gate } = require('qiskit').sim;

console.log(Gate.h.matrix);
const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.h, 0, 0).run();
console.log('Hadamard: ', circuit.stateToString());

// Applying the Hadamard twice will give back the original state, in this case
// the zero state.
const c = Circuit.createCircuit(1);
c.addGate(Gate.h, 0, 0).addGate(Gate.h, 1, 0).run();
console.log('Hadamard twice:', c.stateToString());
