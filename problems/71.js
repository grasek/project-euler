function farey(n) {
  let seq = [[0, 1], [1, 1]], result = 0, min = 2/7;
  for (let q = n - 1000; q <= n; q++) {
      for (let p = Math.floor(q / 3); p < q; p++) {
        if(p / q > 3 / 7) break
        gcd(p, q) === 1 && p / q < 3 / 7 && p / q > min ? (result = [p, q], min = p / q) : null;
    }
  }
  return result;
}

const gcd = (a, b) => b ? gcd(b, a % b) : a;
const compareFractions = (a, b) => { return a[0] * b[1] - a[1] * b[0] }
console.log(farey(1000000)); 
