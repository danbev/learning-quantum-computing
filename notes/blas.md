### Basic Linear Algebra Subprograms (BLAS)
Provides low level matrix operations.
BLAS is the computational kernel ("the bottom of the food chain") in linear
algebra or scientific applications. 

* BLAS1 (vector-vector operations)
* BLAS2 (matrix-vector operations)
* BLAS3 (matrix-matrix operations)

### Level 1
This level only has functions declarations that deal with vector operations,
like dot products, vectors norms.
```
ax + y = y
```
The function for this is named axpy which means `a x plus y`.

### Level 2
Matrix-vector fuction declarations like matrix-vector multiplication
`gemv' general matrix vector multiplication.

### dgemm
Double precision GEneral Matrix to Matrix Multiplication (gemm).
So this multiplies two input matrices with each other to produce a third.

```c
void cblas_dgemm (const CBLAS_LAYOUT layout,
                  const CBLAS_TRANSPOSE transa,
                  const CBLAS_TRANSPOSE transb,
                  const MKL_INT m,
                  const MKL_INT n,
                  const MKL_INT k,
                  const double alpha,
                  const double *a,
                  const MKL_INT lda,
                  const double *b,
                  const MKL_INT ldb,
                  const double beta,
                  double *c,
                  const MKL_INT ldc);
```

There is a concrete example in [blas.c](../src/blas.c).

The matrix multiplication in this example looks like this:
```
 ⌈1 2⌉⌈1⌉ = ⌈1*1+2*2⌉ = ⌈ 5⌉                                               
 |3 4|⌊2⌋   |3*1+4*2|   |11|
 ⌊5 6⌋      ⌊5*1+6*2⌋   ⌊17⌋
```
Now notice that this operations matrix (the one on the left) is defined as:
```c
  double input1[6] = {1.0, 3.0, 5.0,
                      2.0, 4.0, 6.0};
```
So we are giving it with the first column, followed by the second.

And if we want to have more inputs to the operations we have to specify them.
So lets add one more
```
 ⌈1 2⌉⌈1 3⌉ = ⌈1*1+2*2 1*3+2*4⌉ = ⌈ 5 11⌉                                               
 |3 4|⌊2 4⌋   |3*1+4*2 3*3+4*4|   |11 25|
 ⌊5 6⌋        ⌊5*1+6*2 5*3+6*4⌋   ⌊17 39⌋
```
So I spent a good amount if time trying to add another input column and just
kept getting the wrong. The issue was that I was not changing the ldb which
specifics the columns or rows that this input matrix uses. Think about if you
were writing a loop, you'd need to know the number of columns/rows that the
matrix is dealing with. The array is just that an ordered list of numbers and
can be interpreted in different ways.

```
 ⌈1 2⌉⌈1 3 5⌉ = ⌈1*1+2*2 1*3+2*4 1*5+2*6⌉ = ⌈ 5 11 15⌉                                               
 |3 4|⌊2 4 6⌋   |3*1+4*2 3*3+4*4 3*5+4*6|   |11 24 39|
 ⌊5 6⌋          ⌊5*1+6*2 5*3+5*4 5*3+6*6⌋   ⌊17 35 51⌋
```

```c
  cblas_dgemm(CblasColMajor,
              CblasNoTrans,
              CblasTrans, 
              3,
              3,
              2,
              1,
              A,
              3,
              B,
              3,
              2,
              C,
              3);
```
