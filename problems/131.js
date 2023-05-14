import { SOA } from "../algorithms/sieveOfAtkin.js";
const calc = () => {
    const primes = SOA(1000000),
        cubes = Array.from({ length: 3000 }, (_, i) => BigInt(i) ** 3n);
    let result = 0;
    for (let i = 0; i < primes.length; i++) {
        for (let j = 1n; j < 10000n; j++) {
            if (cubes.includes(j ** 3n + j ** 2n * BigInt(primes[i]))) {
                result++;
                break;
            }
        }
        if (i % 300 === 0) console.log([i, result]);
    }
    return result;
};
console.log(calc());
