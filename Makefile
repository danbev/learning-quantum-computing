all: bell

bell: src/bell.cc
	clang++ --std=c++14 -o $@ -g $<

.PHONY: clean
clean: 
	rm -f bell

