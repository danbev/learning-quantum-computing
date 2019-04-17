console.log(` Qubit System:
qubits                                end-based
 q[0] ----H--------------------------- q[2]
 q[1] -------------------------------- q[1]
 q[2] -------------------------------- q[0]
`);

const numQubits = 3
const dimension = 8
// Wires, or the qubits that the Haramard gate operates on. It only
// operates on a single qubit which is qubit 0 in our case.
const wires = [0];
// The transformation which is a 4x4 matrix.
/*
const T = [
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
];
*/
const T = [
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
];
// Make the indexes end-based meaning that instead of being 0 this will
// make it 1. So the the wire/qubit being used by the gate is now 1 instead
// of zero.
for (let i = 0; i < wires.length; i += 1) {
  wires[i] = numQubits - 1 - wires[i];
}
wires.reverse();
console.log('wires used:', wires, '(end-based)');

const unusedWires = [];
for (let i = 0; i < numQubits; i += 1) {
  // Remember that the wires that are used by the gate are in the wires
  // array. We are here adding them to the unusedWires array if they are not
  // used.
  if (wires.indexOf(i) === -1) {
    unusedWires.push(i);
  }
}
console.log('unused wires:', unusedWires, '(end-based)');

let i = dimension;
while (i--) {
  let j = dimension;
  while (j--) {
    let bitsEquals = true;
    let unusedCount = unusedWires.length;
    while (unusedCount--) {
      const b = 1 << unusedWires[unusedCount];
      console.log(`${i} & (${b}) !== ${j} & (${b}) => ${(i & b)} !== ${(j & b)}`);
      if ((i & b) !== (j & b)) {
        bitsEquals = false;
        console.log('bitsEqual:', bitsEquals);
        break;
      } 
    }
    T[i][j] = bitsEquals ? '*' : '-';
  }
}
console.log(T);

const I = [
  [1, 0],
  [0, 1]
];
