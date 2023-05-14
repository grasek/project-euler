import { permutations } from "../algorithms/permutations.js";

function combinationSum(candidates, target) {
   const result = [];
   function backtrack(combination, start, sum) {
      if (sum === target && [...new Set(combination)].length <= 2) {
         if (
            (!combination.includes(2) && !combination.includes(3)) ||
            (!combination.includes(2) && !combination.includes(4)) ||
            (!combination.includes(3) && !combination.includes(4))
         )
            result.push([...combination]);
         return;
      }

      if (sum > target) return;

      for (let i = start; i < candidates.length; i++) {
         combination.push(candidates[i]);
         backtrack(combination, i, sum + candidates[i]);
         combination.pop();
      }
   }
   backtrack([], 0, 0);
   return result;
}

const memoize = (func) => {
   const cache = {};
   return function (...args) {
      const key = JSON.stringify(args);

      if (cache[key]) return cache[key];

      const result = func.apply(this, args);
      cache[key] = result;
      return result;
   };
};

const memoizedCombination = memoize(combinationSum), memoizedPermutation = memoize(permutations);

const calc = () => {
   let result = 0;
   const combinations = memoizedCombination([1, 2, 3, 4], 50);
   for (let i = 0; i < combinations.length; i++) {
      result += memoizedPermutation(
         combinations[i],
         combinations[i].length - 1
      ).length;
   }
   return result;
};

console.log(calc());
