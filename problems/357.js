import { divisors } from '../algorithms/divisors.js';
import { SOA } from '../algorithms/sieveOfAtkin.js';
const calc = () => {
    const primes = SOA(10 ** 8);
    let result = 0; // includes 1
    for (let i = 2; i <= 10 ** 5; i += 4) {
        if (!primes.includes(i + 1)) continue;
        if (!primes.includes(2 + i / 2)) continue;
        let valid = true;
        for (let j = 3; j * j <= i; j++) {
            if (i % j !== 0) continue;
            if (!primes.includes(j + i / j)) { valid = false; break};
        }
        valid ? result += i : null;
    }
    return result;
	//(PARI) is_ok(n)=fordiv(n, d, if(!isprime(d+n/d), return(0))); return(1);
//for(n=1, 10^4, if(is_ok(n), print1(n, ", ")));
	
}

console.log(calc());
