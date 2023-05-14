import { combinations } from '../algorithms/combinations.js';

const calc = () => {
    let result = [];
    const p = (num) => { return num > 1n ? num * p(num - 1n) : 1n; }
    for (let i = 1n; i <= 100n; i += 1n) {
        for (let j = 1n; j < i; j += 1n) p(i) / (p(j) * p(i - j)) > 1000000n ? result.push([i,j]) : null;
    }
    return result.length;
};
console.log(calc())
