'use strict';
const fiboSum = (max) => {
  max = max || 4000000;
  let previous = 1;
  let current = 1;
  let newFib = previous + current;
  let sum = 2;
  while (newFib < max) {
    previous = current;
    current = newFib;
    newFib = previous + current;
    if (newFib % 2 === 0) sum += newFib
  }
  return sum
}

fiboSum();