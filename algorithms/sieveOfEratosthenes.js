export function SOE(num) {
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
    
    for (let k = 0; k < isPrime.length; k++) {
        isPrime[k] ? primes.push(k) : undefined;
    }
    
    return primes;
}