import { SOA } from '../algorithms/sieveOfAtkin.js';

const calc = () => {
    const primes = SOA(10 ** 9);
    return primes[primes.length - 1]
}

console.log(calc())