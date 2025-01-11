# Unexpected Behavior with Negative Input in TypeScript Function

This repository demonstrates a bug in a simple TypeScript function that unexpectedly does nothing when provided a negative input. The `printNumbers` function is intended to print numbers from 1 to n, but it fails to handle negative input gracefully.

## Bug

The `bug.ts` file contains the buggy implementation. When a negative number is passed as input, the loop condition `i <= n` is always false, and the function does nothing. This is unexpected behavior; the function should either throw an error or handle negative input in a more meaningful way. 

## Solution

The `bugSolution.ts` file provides a corrected implementation. The solution adds a check for negative input at the beginning of the function. If the input is negative, it throws an error; otherwise, it proceeds as before.  This approach ensures that the function behaves as expected and provides informative feedback when encountering invalid input.