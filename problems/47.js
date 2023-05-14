import { factorize } from '../algorithms/factorize.js';

const calc = () => {
    for (let i = 1; true; i++) {
        let [a, b, c, d] = [factorize(i), factorize(i + 1), factorize(i + 2), factorize(i + 3)];
        const uni = (x) => [...new Set(x)];
        if (uni(a).length === 4 && uni(b).length === 4 && uni(c).length === 4 && uni(d).lenght === 4) {
            return [i, i + 1, i + 2, i + 3];
        }
    }
}

console.log(calc());