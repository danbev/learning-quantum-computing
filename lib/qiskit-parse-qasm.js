const qiskit = require('qiskit');
const qasm = qiskit.qasm;
const sim = qiskit.sim;
const Circuit = sim.Circuit;


const const0 = `
IBMQASM 2.0;
include "qelib1.inc";
qreg q[1];
creg c[1];

x q[1];
measure q -> c;
`;

console.log('QASM Version: ', qasm.version);
const parser = new qasm.Parser();

const p = parser.parse(const0);
console.log(p);
const c = new Circuit(1, p);
console.log(c);
c.run();
console.log(c);
