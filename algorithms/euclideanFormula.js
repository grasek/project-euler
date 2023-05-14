export function euclideanFormula(max) {
   const triples = [],
      min = 1,
      gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
   for (let m = 2; m <= Math.sqrt(max); m++) {
      for (let n = 1; n < m; n++) {
         if ((m - n) % 2 === 1 && gcd(m, n) === 1) {
            const a = m ** 2 - n ** 2,
               b = 2 * m * n,
               c = m ** 2 + n ** 2;
            let k = 1;
            while (k + c <= max) {
               if (k + c >= min) {
                  triples.push([a * k, b * k, c * k]);
               }
               k++;
            }
         }
      }
   }
   return triples;
}
