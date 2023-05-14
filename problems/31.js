import { combinationSum } from '../algorithms/combinationSum.js';

const calc = () => {
    return combinationSum([1, 2, 5, 10, 20, 50, 100, 200], 200).length;
}