import { combinationSum } from "../algorithms/combinationSum.js";
import { permutations } from "../algorithms/permutations.js";

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const memoizedCombinationSum = memoize(combinationSum);
const memoizedPermutations = memoize(permutations);

const calc = () => {
  let result = 0;
  const combs = [];
  const combinations = memoizedCombinationSum([1, 2, 3, 4], 5);
  for (let i = 0; i < combinations.length; i++) {
    [...new Set(combinations[i])].length < 3 ? combs.push(combinations[i]) : undefined;
  }
  
  for (let k = 0; k < combs.length; k++) {
    result += permutations(combs[k], combs[k].length).length;
    console.log( permutations(combs[k], combs[k].length))
  }
  
  return result;
};
console.log(calc());