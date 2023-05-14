import { SOE } from '../algorithms/sieveOfEratosthenes.js';
const calc = () => {
    let num = 2000000;
    const result = [], primes = SOE(num);
    function truncatable(num) {
        let result = [];
        
        for (let i = 1; i <= num.length; i++) {
            result.push(num.slice(0, i))
        }
        
        for (let j = 1; j <= num.length - 1; j++) {
            result.push(num.slice(j, num.length))
        }
        
        result = result.map(e => parseInt(e.join("")))
        
        for (let k = 0; k < result.length; k++) {
            if (!primes.includes(result[k])) return false;
        }
        
        return [true, result, primes];
    }
    
    for (let i = 4; true; i++) {
        let arr = Array.from(String(primes[i]), Number);
        if (truncatable(arr)) result.push(arr);
        if (result.length === 11) return (result.map(e => parseInt(e.join('')))).reduce((a,b) => a + b);
    }
}