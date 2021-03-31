#include <cblas.h>
#include <stdio.h>

int main(int argc, char** argv) {
  int i=0;
  double input1[6] = {1.0, 3.0, 5.0,
                      2.0, 4.0, 6.0};
  int lda = 3; // number of columns when ColMajor

  double input2[4] = {1.0, 2.0,
                      3.0, 4.0};
  int ldb = 2; // number of columns when ColMajor

  double output[6] = {.0, .0, .0, .0, .0, .0};
  int ldc = 3; // number of columns when ColMajor

  int m = 3;
  int n = 2;
  int k = 2;

  // multiply two matricies with double precision values
  cblas_dgemm(CblasColMajor,
      CblasNoTrans,
      CblasNoTrans, 
      m,            // m, rows in the first input matrix
      n,            // n, columns in the second input matrix
      k,            // k columns of first input matrix, rows of second input matrix
      1,            // value to scale the values with
      input1, 
      lda,          // lda
      input2, 
      ldb,          // ldb
      1,            // value use to scale output
      output, 
      ldc);           // for row major

  for(int i=0; i < 6; i++) {
    printf("%lf ", output[i]);
  }
  printf("\n");

  return 0;
}
