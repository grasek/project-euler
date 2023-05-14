import { factorize } from "../algorithms/factorize.js";
import { SOE } from "../algorithms/sieveOfEratosthenes.js";
const calc = () => {
    const primes = SOE(5 * 10 ** 7);
    let result = 0;
    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            if (primes[i] * primes[j] < 10 ** 8) {
                result++;
            } else {
                break;
            }
        }
    }
  return result;
};

console.log(calc());
