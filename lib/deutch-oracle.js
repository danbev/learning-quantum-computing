/**
  * The goal of this program is to simulate the deutch-oracle 
  * algoritm and provide a JavaScript example for it. 
  *
  * There are lots of great resources on the internet that provides
  * the theory so the documentation is not extensive here. Our hope
  * is that this can compliment those resources.
  */
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

function print(oracle) {
  oracle.forEach((row) => { console.log(row); } );
  console.log();
}

function measureQubit0(state) {
  return state[0].re === 0 && state[1].re === 0 ? '|1>' : '|0>';
}

function run(fn) {
  const matrix = oracleMatrixFrom(fn);
  const circuit = Circuit.createCircuit(2);
  circuit.init();
  circuit.add(Gate.x, 0, 1)
         .add(Gate.h, 1, 0)
         .add(Gate.h, 1, 1)
         .add(new Gate('uf', matrix), 2, [0, 1])
         .add(Gate.h, 3, 0)
         .print();

  console.log('Oracle matrix (uf):');
  print(matrix);

  circuit.run();

  console.log('Final state:');
  console.log(circuit.stateToString());
  console.log();

  console.log('Show tensor state:');
  printTensor(circuit.state);
  console.log();

  const qubit0 = measureQubit0(circuit.state);
  console.log('Measure qubit 0:');
  console.log(`qubit[0]: ${qubit0}, Function is ${qubit0 === '|1>' ?
              'balanced' : 'constant'}!`);
  console.log();
}

function oracleMatrixFrom(f) {
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
    if (x === 0) {
      matrix[z][result] = 1;
    } else {
      matrix[z][2+result] = 1;
    }
  }
  return matrix;
}

console.log('                       Balanced function')
run((x) => (x === 0) ? 1 : 0);

console.log('                       Constant 0 function')
run((x) => 0);

console.log('                       Constant 1 function')
run((x) => 1);
