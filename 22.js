const fs = require('fs');

const processName = (name) => {
  name = name.replace(/\"/g, ""); // nix quotes
  let result = name.split('').map(char => char
    .toLowerCase()
    .charCodeAt(0) - 96)
    .reduce((sum, num) => { return sum += num }, 0);
  return result
}

const processData = (data) => {
  const names = data.split(',');
  names.sort();
  let index = 1;
  const result = names
    .map(processName)
    .reduce((sum, num) => { return sum += (num * index++) }, 0);
  console.log(result);
  return result
}

const getData = (filepath) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) console.log(err);
    if (data) processData(data);
  })
}

getData('./data/data-22.js');