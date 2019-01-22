"use strict"
const args = process.argv.slice(2)[0];

const factorial = (n) => {
	// simple impl before memoize
  const res = n <= 2 ? n : n * factorial(n - 1);
  console.log(res.toFixed()); // this is a problem. JS doesn't handle large numbers well
  return res
}

const splitAndSum = (n) => {
  console.log(Number(n));
  const res = n.toString()
    .split('')
    .map(i => parseInt(i))
    .reduce((sum, num) => { return sum += num }, 0);
    console.log(res);
    return res
}

let f = factorial(parseInt(args));
//splitAndSum(f);