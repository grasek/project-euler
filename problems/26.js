import { calculateFraction } from '../algorithms/calculateFraction.js';
import { SOE } from '../algorithms/sieveOfEratosthenes.js';
const calc = () => {
    
    function cycleLength(fraction) {
        const fractionStart = parseInt(fraction.slice(2, 7));
        let fractionPart = 0, i = 3, result = 0;
        while (i < fraction.length - 6) {
            if (parseInt(fractionPart) === fractionStart) return result;
            result++;
            fractionPart = parseInt(fraction.slice(i, i + 5));
            i++;
        }
        return result;
    }
    
    let result = [1,1];
    const fractions = [], primes = SOE(1000);
    
    for (let i = 6; i < 1000; i++) if (primes.includes(i)) fractions.push([i, calculateFraction(1, i, 1000)]);

    for (let j = 0; j < fractions.length; j++) {
        cycleLength(fractions[j][1]) > result[0] ? result = [cycleLength(fractions[j][1]), fractions[j][0]] : null; 
    }
    
    return result;
}
