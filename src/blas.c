#include <cblas.h>
#include <stdio.h>

int main(int argc, char** argv) {
  int i=0;
  double input1[6] = {1.0, 3.0, 5.0,
                      2.0, 4.0, 6.0};

  double input2[2] = {1.0, 2.0};

  double output[3] = {.0, .0, .0};

  // multiply two matricies with double precision values
  cblas_dgemm(CblasColMajor,
      CblasNoTrans,
      CblasNoTrans, 
      3,            // m, rows in the first input matrix
      1,            // n, columns in the second input matrix
      2,            // k columns of first input matrix, rows of second input matrix
      1,            // value to scale the values with
      input1, 
      3,            // for row major
      input2, 
      3,            // for row major
      1,            // value use to scale output
      output, 
      3);           // for row major

  for(i=0; i < 3; i++)
    printf("%lf ", output[i]);

  printf("\n");

  return 0;
}
