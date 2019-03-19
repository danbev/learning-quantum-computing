from qutip import *

import numpy as np
import matplotlib.pyplot as plt
import math

def not_gate(qubit):
 return Qobj([[0, 1], 
              [1, 0]]) * b

bloch = Bloch()
b = basis(2, 0)
n = not_gate(b);
print(b)
print(n)
bloch.add_states(n)
bloch.show()
