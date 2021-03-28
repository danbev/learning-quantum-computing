all: bell

bell: src/bell.cc
	clang++ --std=c++14 -o $@ -g $<

BLAS_DIR=../OpenBLAS
blas: src/blas.c
	${CC} -o $@ $< -I${BLAS_DIR} -L${BLAS_DIR} -lopenblas -pthread

.PHONY: clean
clean: 
	rm -f bell

