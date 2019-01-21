'use strict';
const fs = require('fs');
const arg = process.argv.slice(0, 2)[0];

const getData = (filepath) => {
  filepath = filepath && filepath.length > 0 ? filepath : './data/data-13.js';
  let nums;
  
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) console.log("Error. Please check filepath.", err);
    if (data) {
      nums = data.split('\r\n').map(i => Number(i));
    }
  	const sum = nums.reduce((sum, num) => {
  		return sum += num
  	}, 0);
  	console.log(sum.toString().slice(0, 11) * 1000000000);
  });
}


const fetchData = new Promise((resolve, reject) => {
  resolve(getData());
});

fetchData
