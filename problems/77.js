import { combinationSum } from "../algorithms/combinationSum.js";
import { SOE } from "../algorithms/sieveOfEratosthenes.js";

const calc = () => {
  const primes = SOE(1000);
  let mostWays = 0;
  let k = 0;
  function primeSummations(k, mostWays) {
    let currentWays = (combinationSum(primes, k)).length;
    if (currentWays > mostWays) mostWays = currentWays;
    if (mostWays < 5000) {
      return primeSummations(k + 1, mostWays);
    } else {
        return k;
    }
  }
    return primeSummations(k, mostWays);
};
