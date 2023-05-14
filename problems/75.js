const calc = () => {
   function euclideanFormula(max) {
      const triples = [],
         gcd = (a, b) => (b ? gcd(b, a % b) : a),
         min = 1;
      for (let m = 2; m <= Math.sqrt(max); m++) {
         for (let n = 1; n < m; n++) {
            if ((m - n) % 2 === 1 && gcd(m, n) === 1) {
               const a = m * m - n * n,
                  b = 2 * m * n,
                  c = m * m + n * n;
               let k = 1;
               while (c * k <= max) {
                  let sum = a * k + b * k + c * k;
                   if (c * k >= min && sum <= 1500000) {
                     triples.push(sum);
                  }
                  k++;
               }
            }
         }
      }
      return triples;
   }
   let triples = euclideanFormula(1500000);
   return triples.filter((e) => triples.indexOf(e) === triples.lastIndexOf(e)).length;
};

console.log(calc());
