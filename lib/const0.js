const qasm = require('@qiskit/qasm');

console.log('QASM Version: ', qasm.version);

const const0 = `
IBMQASM 2.0;
include "qelib1.inc";
qreg q[2];
creg c[2];

x q[1];
measure q -> c;
`;
const parser = new qasm.Parser();
const parsed = parser.parse(const0)
console.log(parsed);
