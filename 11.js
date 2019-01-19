const getData = () => {
  const matrix = [];
  let nums = input.split(' ').map(i => parseInt(i));
  for (let i = 0; i < nums.length; i += 20) {
    const slice = nums.slice(i, i + 20);
    matrix.push(slice);
  }
  return matrix;
}

const calcProduct = (arr) => {
  return arr.reduce((product, num) => {
    return product *= num
  }, 1);
}

const findMaxRange = () => {
  let bestProduct;
  const data = getData();
  let line, horiz, vert, diagLeft, diagRight;
  for (let lineIndex = 0; lineIndex < data.length - 3; lineIndex++) {
    for (let numIndex = 0; numIndex < data[lineIndex].length - 3; numIndex++) {
      line = data[lineIndex];
      horiz = line.slice(numIndex, numIndex + 4);
      vert = [
        data[lineIndex][numIndex],
        data[lineIndex + 1][numIndex],
        data[lineIndex + 2][numIndex],
        data[lineIndex + 3][numIndex] 
        ];
      diagLeft = [
        data[lineIndex][numIndex], 
        data[lineIndex + 1][numIndex - 1], 
        data[lineIndex + 2][numIndex - 2],
        data[lineIndex + 3][numIndex - 3]
        ];
      diagRight = [
        line[numIndex], 
        data[lineIndex + 1][numIndex + 1], 
        data[lineIndex + 2][numIndex + 2],
        data[lineIndex + 3][numIndex + 3]
      ];

      let results = [horiz, vert, diagLeft, diagRight];
      const filteredResults = results.map(arr => {
        let filtered = arr.filter(item => !!item);
        let res = calcProduct(filtered);
        return res
      });
      
      filteredResults.forEach(res => {
        if (!bestProduct || res > bestProduct) bestProduct = res;
      })

    }
  }
  return bestProduct
}

findMaxRange();
