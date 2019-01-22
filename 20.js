"use strict"
const args = process.argv.slice(2)[0];
console.log(args);

const factorial = (n) => {
	// simple impl before memoize
  const res = n <= 2 ? n : n * factorial(n - 1);
  return res
}

factorial(parseInt(args));