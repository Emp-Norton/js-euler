(function(n){
  const result = new Array(n).fill(1).map((n, i) => i).reduce((s, n) => { return (n % 3 === 0 || n % 5 === 0) ? s+=n : s},0);
  console.log(result)
})(parseInt(process.argv.slice(2)[0]))
