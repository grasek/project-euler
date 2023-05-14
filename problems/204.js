import { SOE } from "../algorithms/sieveOfEratosthenes.js";

const calc = () => {
    const primes = SOE(100), limit = 10**9;
    function search(x = 1, minInd = 0) {
        let result = 1;
        for (let i = minInd; i < primes.length; i++) {
            let product = x * primes[i];
            if (product > limit) break;
            result += search(product, i);
        }
        return result;
    }
    return search(1,0);
};