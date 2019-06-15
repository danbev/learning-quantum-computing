const { Circuit, gates, Gate } = require('qiskit').sim;
const qubits = require('jsqubits').jsqubits
console.log('Balanced:')
const balanced = Circuit.createCircuit(2);
balanced.init();
let uf = new Gate('uf', 
                    [[0, 1, 0, 0],
                     [1, 0, 0, 0],
                     [0, 0, 1, 0],
                     [0, 0, 0, 1]]);

balanced.add(Gate.x, 0, 1)
        .add(Gate.h, 1, 0)
        .add(Gate.h, 1, 1)
        .add(uf, 2, [0, 1])
        .add(Gate.h, 3, 0)
        .print();
balanced.run();
console.log('State')
console.log(balanced.stateToString());

console.log('Const 0:');
const const0 = Circuit.createCircuit(2);
const0.init();
uf = new Gate('uf', 
              [[1, 0, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 1, 0],
               [0, 0, 0, 1]]);
const0.add(Gate.x, 0, 1)
      .add(Gate.h, 1, 0)
      .add(Gate.h, 1, 1)
      .add(uf, 2, [0, 1])
      .add(Gate.h, 3, 0)
      .print();
const0.run();
console.log('State')
console.log(const0.stateToString());
console.log();

console.log('Const 1:');
const const1 = Circuit.createCircuit(2);
const1.init();
uf = new Gate('uf', 
              [[0, 1, 0, 0],
               [1, 0, 0, 0],
               [0, 0, 0, 1],
               [0, 0, 1, 0]]);
const1.add(Gate.x, 0, 1)
      .add(Gate.h, 1, 0)
      .add(Gate.h, 1, 1)
      .add(uf, 2, [0, 1])
      .add(Gate.h, 3, 0)
      .print();
const1.run();
console.log('State')
console.log(const1.stateToString());
console.log();

/* Notice that we have to make two function calls to 
 * determine if the function 'f' is constant of balanced.
 */
function isBalanced(f) {
  if (f(0) === 0) {
    if (f(1) === 0) {
      return false;
    }
    return true;
  }

  if (f(1) === 0) {
    return true;
  } 
  return false;
}

console.log(isBalanced( (x) => 0));
console.log(isBalanced( (x) => 1));
console.log(isBalanced( (x) => { return (x === 0) ? 1:0 }));
console.log(isBalanced( (x) => { return (x === 1) ? 0:1 }));
