import { farey } from "../algorithms/farey.js";
const calc = () => {
   const farey = (n) => {
      const gcd = (a, b) => (b ? gcd(b, a % b) : a);
      const compareFractions = (a, b) => a[0] * b[1] - a[1] * b[0];
      let seq = [
            [0, 1],
            [1, 1],
         ],
         result = 0;
      for (let q = 2; q <= n; q++) {
         for (let p = 1; p < q; p++) {
            gcd(p, q) === 1 && p / q < 1 / 2 && p / q > 1 / 3 ? result++ : null;
         }
      }
      return result;
   };
   return farey(12000);
};

console.log(calc());
