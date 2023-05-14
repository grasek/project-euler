import { SOA } from "../algorithms/sieveOfAtkin.js";

const calc = () => {
    const lim = 10 ** 2,
        admissible = Array.from({ length: 7 }, (_, i) => 2 ** i),
        primes = SOA(lim);
    let start = 0;
    while (primes[start] * 2 < lim) {
        for (let len = 2; len < primes.length - start; len++) {
            let product = primes.slice(start, len);
            console.log([primes, start, len, product]);
            if (product.length > 1) {
                if (product.reduce((a, b) => a * b) > lim) break;
                admissible.push(product.reduce((a,b) => a*b));
            }
        }
        start++;
    }
    return admissible;
};

console.log(calc());
