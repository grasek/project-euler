import { combinations } from '../algorithms/combinations.js';
const calc = () => {
    let digits = Array.from({ length: 10 }, (_, i) => i)// squares = Array.from({length:9}, (_,i) => (i+1)**2)
    let combs = combinations(digits, 6);
    let c1 = [], c2 = [];
    for (let i = 0; i < combs.length; i++) {
        [0, 2, 3, 4, 8, 6].every(e => combs[i].includes(e)) ? c1.push(combs[i]) : null;
        [1, 4, 9, 5, 6].every(e => combs[i].includes(e)) ? c2.push(combs[i]) : null;        
    }
    return [c1,c2];
}

console.log(calc())