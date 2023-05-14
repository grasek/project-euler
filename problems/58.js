import { factorize } from "../algorithms/factorize.js";
const calc = () => {
  let num = 9,
    jump = 2,
    primes = 3,
    nonPrimes = 1,
    sideLength = 3;

  function spiralPrimes(num, jump, primes, nonPrimes, sideLength) {
    if (primes / (nonPrimes + primes) < 0.1000001) {
      return sideLength;
    } else {
      jump += 2;
      sideLength += 2;
      for (let i = 0; i < 4; i++) {
          factorize(num).length === 1 ? primes++ : nonPrimes++;
        num += jump;
      }
      return spiralPrimes(num, jump, primes, nonPrimes, sideLength);
    }
  }

  return spiralPrimes(num, jump, primes, nonPrimes, sideLength);
};
console.log(calc())
