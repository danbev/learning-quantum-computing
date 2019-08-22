const { Circuit, gates, Gate } = require('qiskit').sim;

const printTensor = (state) =>  {
  if (state[0].re === 0 && state[1].re === 0) {
    console.log(`0  ⌈${state[2].re}⌉`);
    console.log(`   ⌊ ${state[3].re}⌋`);
    console.log(`1  ⌈${state[2].re}⌉`);
    console.log(`   ⌊ ${state[3].re}⌋`);
  } 
  else {
    console.log(`1  ⌈${state[0].re}⌉`);
    console.log(`   ⌊ ${state[1].re}⌋`);
    console.log(`0  ⌈${state[0].re}⌉`);
    console.log(`   ⌊ ${state[1].re}⌋`);
  }
}

function measureQubit0(state) {
  return state[0].re === 0 && state[1].re === 0 ? '|1>' : '|0>';
}

function run(oracle) {
  const circuit = Circuit.createCircuit(2);
  circuit.init();
  const uf = new Gate('uf', oracle);
  circuit.add(Gate.x, 0, 1)
         .add(Gate.h, 1, 0)
         .add(Gate.h, 1, 1)
         .add(uf, 2, [0, 1])
         .add(Gate.h, 3, 0)
         .print();
  circuit.run();
  console.log('Final state:');
  console.log(circuit.stateToString());
  printTensor(circuit.state);
  const qubit0 = measureQubit0(circuit.state);
  console.log(`qubit[0]: ${qubit0}, Function is ${qubit0 === '|1>' ? 'balanced' : 'constant'}!`);
  console.log();
}

console.log('Balanced:')
run([[0, 1, 0, 0],
     [1, 0, 0, 0],
     [0, 0, 1, 0],
     [0, 0, 0, 1]]);

console.log('Const 0:');
run([[1, 0, 0, 0],
     [0, 1, 0, 0],
     [0, 0, 1, 0],
     [0, 0, 0, 1]]);

console.log('Const 1:');
run([[0, 1, 0, 0],
     [1, 0, 0, 0],
     [0, 0, 0, 1],
     [0, 0, 1, 0]]);

/* Notice that we have to make two function calls to 
 * determine if the function 'f' is constant of balanced.
 */
function classicIsBalanced(f) {
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

/*
console.log(`Classic ${isBalanced((x) => 0)}`);
console.log(`Classic ${isBalanced((x) => 1)}`);
console.log(`Classic ${isBalanced( (x) => { return (x === 0) ? 1:0 })}`);
console.log(`Classic ${isBalanced( (x) => { return (x === 1) ? 0:1 })}`);
*/

function oracle(f) {
  const dim = 4;
  const input = [{x: 0, y: 0}, {x:0, y:1}, {x:1, y:0}, {x:1, y:1}];
  const matrix = [];
  for (let i = 0; i < dim; i++) {
    matrix.push(new Array(dim).fill(0));
  }

  for (let z = 0; z < input.length; z++) {
    const x = input[z].x;
    const y = input[z].y;
    const result = y ^ f(x);
    //console.log(`z=${z}, |${x}, ${y}>, ${y} ^ f(${x})= |${x}, ${result}>`);
    if (x === 0) {
      matrix[z][result] = 1;
    } else {
      matrix[z][2+result] = 1;
    }
  }
  return matrix;
}
function prettyPrint(oracle) {
  oracle.forEach((row) => { console.log(row); } );
}
prettyPrint(oracle((x) => (x === 0) ? 1 : 0));
prettyPrint(oracle((x) => 0));
prettyPrint(oracle((x) => 1));
