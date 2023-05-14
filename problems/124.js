import { factorize } from '../algorithms/factorize.js';

const calc = () => {
    let arr = [];
    for (let i = 2; i <= 100000; i++) {
        let factors = [...new Set(factorize(i))];
        factors.length > 1 ? arr.push([i, factors.reduce((a, b) => (a * b))]) : arr.push([i, factors[0]]);
    }
    arr = arr.sort((a, b) => a[1] - b[1]);
    return arr[9997]
}

console.log(calc())