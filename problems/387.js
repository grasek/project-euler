import { SOE } from "../algorithms/sieveOfEratosthenes.js";

const memoize = (func) => {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) return cache[key];
        
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    }
}

const memoizedSOE = memoize(SOE)

const calc = () => {
   function isRTHarshad(num) {
      let digits = Array.from(String(num), Number),
          sumOfDigits = digits.reduce((a, b) => a + b);
       if (!primes.includes(num / sumOfDigits)) return false;
       
       for (let i = digits.length - 1; i >= 0; i--) {
           if (num % sumOfDigits !== 0) return false;
           sumOfDigits -= digits[i];
           num = parseInt(digits.slice(0, i).join(""));
       }
      return true;
   }

   const primes = memoizedSOE(10 ** 14)
    let result = [];
    for (let i = 0; i < primes.length; i++) {
        let prime = Array.from(String(primes[i]), Number);
        isRTHarshad(parseInt(prime.slice(0, -1).join(""))) === true ? result.push(primes[i]) : undefined;
    }
    return result.reduce((a,b) => a + b, 0);
};

console.log(calc());
