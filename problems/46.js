import { SOE } from "../algorithms/sieveOfEratosthenes.js";
const calc = () => {
  const primes = SOE(20000),
    twiceSquares = Array.from({ length: 5000 }, (_, i) => ++i).map(
      (e) => 2 * e ** 2
    ),
    goldbachsNumbers = [];
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < twiceSquares.length; j++) goldbachsNumbers.push(primes[i] + twiceSquares[j]);
  }

   for (let k = 9; k < 100000; k += 2) {
     if (!goldbachsNumbers.includes(k) && !primes.includes(k)) return k;
     else {continue}
   }

  return goldbachsNumbers.sort((a,b) => a - b);
};
