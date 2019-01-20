(function(n){
  const prime = (n) => {
  	for (let i = 2; i <= Math.sqrt(n); i++) {
  		if (n % i === 0) return false
  	}
  	return true
  }
  const result = new Array(2000000).fill(3).map((n, i) => i).reduce((s, n) => { return prime(n) && !even(n) ? s += n : s},0);
  console.log(result);
})(process.argv.slice(2)[0])
