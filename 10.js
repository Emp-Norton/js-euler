function(n){
  // this is not quite correct, but it's late and I'm tired. Fix tomorrow.
  const result = new Array(2000000).fill(3).map((n, i) => i).reduce((s, n) => { return prime(n) && !even(n) ? s += n : s},0);
  console.log(result);
})(process.argv.slice(2)[0])
