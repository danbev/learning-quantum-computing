### Basic Linear Algebra Subprograms (BLAS)
Provides low level matrix operations.
BLAS is the computational kernel ("the bottom of the food chain") in linear
algebra or scientific applications. 

* BLAS1 (vector-vector operations)
* BLAS2 (matrix-vector operations)
* BLAS3 (matrix-matrix operations)


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
 ⌈1 2⌉⌈1 3 5⌉ = ⌈1*1+2*2 1*3+2*4 1*5+2*6⌉ = ⌈ 5 11 15⌉                                               
 |3 4|⌊2 4 6⌋   |3*1+4*2 3*3+4*4 3*5+4*6|   |11 24 39|
 ⌊5 6⌋          ⌊5*1+6*2 5*3+5*4 5*3+6*6⌋   ⌊17 35 51⌋

 ⌈1 2⌉⌈1⌉ = ⌈1*1+2*2⌉ = ⌈ 5⌉                                               
 |3 4|⌊2⌋   |3*1+4*2|   |11|
 ⌊5 6⌋      ⌊5*1+6*2⌋   ⌊17⌋
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
