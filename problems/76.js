import { combinationSum } from '../algorithms/combinationSum.js';

const calc = (num) => {
  let candidates = Array.from({ length: num - 1 }, (_, i) => ++i);
  return combinationSum(candidates, num).length;
}

console.log(calc(100))
