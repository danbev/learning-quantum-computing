const math = require('mathjs');
const { Circuit, Gate } = require('qiskit').sim;

console.log(Gate.s.matrix);
const circuit = Circuit.createCircuit(1);
circuit.addGate(Gate.x, 0, 0).addGate(Gate.s, 1, 0).run();

console.log(math.pow(math.e, math.multiply(math.i, math.PI / 2)));
console.log(math.i);

console.log(circuit.stateToString());
