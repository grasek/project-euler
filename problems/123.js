import { SOA } from '../algorithms/sieveOfAtkin.js';

const soe = (num) => {
    const primes = [];
    const isPrime = new Array(num).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i <= num; i++) {
        if (isPrime[i] === true) {
            for (let j = 2 * i; j < num; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for (let k = 0n; k < isPrime.length; k += 1n) {
        isPrime[k] ? primes.push(k) : undefined;
    }
    
    return primes;
}

const calc = () => {
    const primes = soe(10 ** 7);
    let i = 2n;
    while ((((primes[i] - 1n) ** (i * 1n) + (primes[i] + 1n) ** (i * 1n)) % (primes[i] ** 2n)) <= 10n ** 10n) {
        i += 1n;
    }
    return i + 2n;
}

console.log(calc())