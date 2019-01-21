const prime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) { // benchmark this vs memoization approach
    if (n % i === 0) return false
  }
  return true
}

const coprimes = (a, b) => {
  const max = Math.max(a, b)
  for (let i = 2; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      return false
    }
  }
  return true
}

const countCoprimes = (n) => {
  let total = 1;
  for (let i = 2; i < n; i++) {
    if (coprimes(n, i)) total += 1;
  }
  return total
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const totientMaximum = (n) => {
  let totients = {};
  for (let i = 2; i <= n; i++) {
    totients[i] = i / countCoprimes(i);
  }
  const max = Math.max.apply(null, Object.values(totients));
  return getKeyByValue(totients, max);
}

totientMaximum(1000000)