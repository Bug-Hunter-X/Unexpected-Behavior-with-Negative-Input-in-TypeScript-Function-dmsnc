function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error('Input must be a positive integer.');
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected
//printNumbers(-5); // Throws an error as expected