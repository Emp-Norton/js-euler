"use strict"
const bigInt = require('big-integer');
const args = process.argv.slice(2)[0];

const sumBigIntValues = (bi) => {
  const nums = bi.value;
  const res = nums.reduce((sum, num) => {
    return sum += num
  }, 0);
  return res
}

const factorial = (n) => {
	// simple impl before memoize
  const res = n <= 2 ? n : n * factorial(n - 1);
  /*
  this is a problem. JS doesn't handle large numbers well. Tried:
    .toFixed()
    .toLocaleString()
    .Number()
    .parseInt();
    * Big-integer library (https://github.com/peterolson/BigInteger.js)

    -- perhaps stringify as each 
  */
  return res
}

const splitAndSum = (n) => {
  const nums = bigInt(n).toArray(10);
  const result = sumBigIntValues(nums);
  console.log(result);
  return result
  // const res = n.toString()
  //   .split('')
  //   .map(i => parseInt(i))
  //   .reduce((sum, num) => { return sum += num }, 0);
  //   console.log(res);
  //   return res
}

let f = factorial(parseInt(args));
splitAndSum(f);
// sumBigIntValues({values: [9,1,5,0,0,0,0,0,0,0,0]})