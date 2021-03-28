#include <cblas.h>
#include <stdio.h>

int main(int argc, char** argv) {
  int i=0;
  double A[6] = {1.0, 2.0, 1.0, -3.0, 4.0, -1.0};         
  double B[6] = {1.0, 2.0, 1.0, -3.0, 4.0, -1.0};  
  double C[9] = {.5, .5, .5, .5, .5, .5, .5, .5, .5}; 

  // multiply two matricies with double precision values
  cblas_dgemm(CblasColMajor, CblasNoTrans, CblasTrans, 3, 3, 2, 1, A, 3, B, 3, 2, C, 3);

  for(i=0; i<9; i++)
    printf("%lf ", C[i]);

  printf("\n");

  return 0;
}
