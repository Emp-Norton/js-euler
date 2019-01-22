const fs = require('fs');

const processName = (name) => {
  let result = name.split('').map(char => char.toLowerCase().charCodeAt(0) - 96).reduce((sum, num) => { return sum += num},0);
  return result
}

const processData = (data) => {
  const names = data.split(',');
  names.sort();
  
}

const getData = (filepath) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) console.log(err);
    if (data) {
      processData(data);
    }
  })
}

processName('COLIN');
//getData('./data/data-22.js');