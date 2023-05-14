import { SOE } from "../algorithms/sieveOfEratosthenes.js";

const calc = () => {
  const primes = SOE(10000), result = [];

  function quadraticPrimes(n, a, b, consPrimes) {
    return primes.includes(n ** 2 + a * n + b) ? quadraticPrimes(n + 1, a, b, consPrimes + 1) : [a * b, consPrimes];
  }

  for (let a = -999; a <= 999; a++) {
    for (let b = -1000; b <= 1000; b++) {
      const res = quadraticPrimes(0, a, b, 0);
      if (res !== undefined && res[1] > 2) result.push(res);
    }
  }
  result.sort((a, b) => b[1] - a[1]);
  return result[0][0];
};
