const qiskit = require('qiskit');
const qasm = qiskit.qasm;
const sim = qiskit.sim;
const parser = new qasm.Parser();

console.log('QASM Version: ', qasm.version);

const const0 = `
IBMQASM 2.0;
include "qelib1.inc";
qreg q[2];
creg c[2];

x q[1];
measure q -> c;
`;


function CircuitFor(qasm_source) {
  const parsed = parser.parse(qasm_source);

  let nrQubits = 0;
  parsed.some((entry) => {
    if (entry.type === 'qubit') {
      nrQubits = entry.number;
      return true;
    };
  });
  console.log(`Create Circuit with ${nrQubits} qubits`);
  const circuit = new sim.Circuit({ nQubits: nrQubits });
  console.log(parsed);
  parsed.forEach((entry) => {
    if (entry.type === 'x') {
      console.log(entry.type, entry.identifiers);
      //circuit.addGate(entry.type, 
    }

  });
  return circuit;
}

const circuit = CircuitFor(const0);
circuit.addGate('h', 0, 0);
circuit.addGate('cx', 1, [0, 1]);
circuit.run(10);
console.log(circuit.stateToString());
console.log('gates: ', circuit.gates);
