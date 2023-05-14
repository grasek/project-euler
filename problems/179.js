import { divisors } from '../algorithms/divisors.js'

const calc = () => {
    let result = 0, i = 2;
    while (i < 10 ** 7) {
        const amountOfDivisors = (num) => { return [...new Set(divisors(num))].length };
        if (amountOfDivisors(i) === amountOfDivisors(i + 1)) result++;
        i++;
    }
    return result;
}