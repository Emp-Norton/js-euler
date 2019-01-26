/*
In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.

[
[131, 673, 234, 103, 18],
[201, 96, 342, 965, 150],
[630, 803, 746, 422, 111], 
[537, 699, 497, 121, 956],
[805, 732, 524, 32, 331]
]

Find the minimal path sum, in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.
*/


// node --max-old-space-size=2048 increase memory allocation for node process
'use strict';

const fs = require('fs');

const getData = (filepath) => {
  filepath = filepath ? filepath : './data/data-81.js';
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) return(err);
      if (data) {
        data = data
          .split('\n')
          .slice(0, data.split('\n').length - 1)
          .map(item => item.split(',').map(n => parseInt(n)))
      }
      console.log('Data fetched.');
      findMinPath(data);
  });
}

const testGrid = [
[131, 673, 234, 103, 18],
[201, 96, 342, 965, 150],
[630, 803, 746, 422, 111], 
[537, 699, 497, 121, 956],
[805, 732, 524, 37, 331]
];



const testAnswer = 2427;
let testResult;


const isInRange = (i, j, grid) => {
  return i < grid.length && j < grid.length
}

const findMinPath = (grid) => {
  let pathScores = [];
 // count total calculations to see if adding memory is helping or not
  const recurse = (i, j, total) => {
    // there must be a way to memoize this such that I don't need to recalc (i, j) each time
      // problem: there are multiple paths to any particular (i, j) pair 
      // (2, 2) can be reach by 00, 01, 02, 12, 22 or 00, 10, 20, 21, 22
      // these will have different weights given different node values along the way
    console.log(i, j);
    const curr = grid[i][j] + total;
    if (i == grid.length - 1 && j == grid.length - 1) {
      pathScores.push(curr);
      return
    } 
    if (isInRange(i + 1, j, grid)) recurse(i + 1, j, curr);
    if (isInRange(i, j + 1, grid))  recurse(i, j + 1, curr);
  }
  recurse(0, 0, 0);
  const result = Math.min(...pathScores);
  console.log(result);
  return result
}


getData();