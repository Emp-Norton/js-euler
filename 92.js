/*
A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?
*/
'use strict';

const squareDigits = (n) => {
  return n.toString()
	  .split('')
	  .map(i => parseInt(i) * parseInt(i))
	  .reduce((sum, num) => { return sum += num }, 0);
}

const chain = (n, orig) => {
  while (n != 89) {
    if (n == 1) return false
    n = squareDigits(n);
  }
  if (n == 89) return true
  return false
}

const main = (n) => {
  let visited = {} // memoize to avoid repeats
  let targetNums = {};
  for (let i = 2; i <= n; i++) {
    if (chain(i, i)) {
      targetNums[i] = true;
    }
  }
  console.log(Object.keys(targetNums).length);
}

main(10000000);