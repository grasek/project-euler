import { combinationSum } from '../algorithms/combinationSum.js';

const calc = () => {
    let s1 = 220, s2 = 462, result = 0;
    for (let k = 36; k >= 9; k--) {
        let x = combinationSum([1, 2, 3, 4], k).filter(e => e.length === 9).length
        for (let l = 6; l <= k; l++) {
            let y = combinationSum([1, 2, 3, 4, 5, 6], l - 1).filter(e => e.length === 6).length;
            result += (x / 220) * (y / 462);
        }
    }
    return result;
}

console.log(calc())