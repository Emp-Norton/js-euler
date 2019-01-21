const coprimes = (a, b) => {
  const max = Math.max(a, b)
  for (let i = 2; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      return false
    }
  }
  return true
}

const countCoprimes = (sI, n) => {
  sI = sI || 1;
  let total = 1;
  for (let i = sI; i < n; i++) {
    if (coprimes(n, i)) {
      total += 1;
    }
  }
  return total
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const totientMaximum = (n) => {
  // memoize coprimes here so I don't have to recalc every time
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
  return getKeyByValue(totients, max);
}


const totientMaximum2 = (n) => {
  // memoize coprimes here so I don't have to recalc every time
  let totients = {};
  for (let i = 2; i <= n; i++) {
    totients[i] = i / countCoprimes(2, i);
  }
  const max = Math.max.apply(null, Object.values(totients));
  return getKeyByValue(totients, max);
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
    fn(200);
    let end = Date.now();
    results.push(end-start);
  }
  const avg = average(results);
  console.log(`${fn} \n\n Ran ${n} times. Avg: ${avg}`)
  return avg
}
benchmark(totientMaximum, 100)
