const fs = require('fs');

const coprimes = (a, b) => {
  const max = Math.max(a, b);
  for (let i = 2; i <= max; i++) {
    if (a % i === 0 && b % i === 0) return false
  }
  return true
}

const countCoprimes = (sI, n) => {
  sI = sI || 1;
  let total = 1;
  for (let i = sI; i < n; i++) {
    if (coprimes(n, i)) total += 1;
  }
  return total
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const totientMaximum = (n) => {
  let totients = {};
  let coprimeMemo = {};
  for (let i = 2; i <= n; i++) {
    if (coprimeMemo[i]) {
      totients[i] = i / coprimeMemo[i-1] + countCoprimes(i-1, i);
    } else {
      const coprimeCount = countCoprimes(2, i);
      totients[i] = i / coprimeCount;
      coprimeMemo[i] = coprimeCount;
    }
  }
  const max = Math.max.apply(null, Object.values(totients));
  const answer = getKeyByValue(totients, max);
  fs.appendFile('answer.txt', answer, (err, stdout) =>{
    if (err || stdout) console.log(err, stdout);
    console.log('saved');
  })
}

const benchmark = (fn, n) => {
  const average = (arr) => {
    return arr.reduce((sum, num) => {
      return sum += num
    }, 0) / arr.length; 
  }
  let results = [];
  for (let i = 0; i < n; i++) {
    let start = Date.now();
    fn(1000);
    let end = Date.now();
    results.push(end-start);
  }
  const avg = average(results);
  console.log(`${fn} \n\n Ran ${n} times. Avg: ${avg}`)
  return avg
}
totientMaximum(1000000);
