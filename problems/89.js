import fs from "fs";

function combinationSum(candidates, target) {
    let result = [];
    function backtrack(combination, start, sum) {
        if (sum === target) {
            result.push([...combination]);
            return undefined;
        }
        
        if (sum > target) {
            return undefined;
        }
        
        for (let i = start; i < candidates.length; i++) {
            const repetition = combination.filter(e => e === candidates[i])
            if ([4,5,9].includes(candidates[i]) && [4,5,9].some(e => combination.includes(e))) continue;
            if ([40, 50, 90].includes(candidates[i]) && [40, 50, 90].some(e => combination.includes(e))) continue;
            if ([400,500,900].includes(candidates[i]) && [400,500,900].some(e => combination.includes(e))) continue;
            if (repetition.length > 2 && [1,10,100].includes(candidates[i])) continue;
            combination.push(candidates[i]);
            backtrack(combination, i, sum + candidates[i]);
            combination.pop();
        }
    };
    backtrack([], 0, 0);
    result = result.sort((a,b) => a.length - b.length);
    return result[0];
}

const calc = () => {
   const romanNumerals = String(
         fs.readFileSync("../assets/roman.txt", "utf-8")
      ).split("\n"),
      dictionary = {
         I: 1,
         IV: 4,
         V: 5,
         IX: 9,
         X: 10,
         XL: 40,
         L: 50,
         XC: 90,
         C: 100,
         CD: 400,
         D: 500,
         CM: 900,
         M: 1000,
       },
      dict = {
        1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
        },
      values = [],
      charsStart = romanNumerals.join("").length;
   for (let i = 0; i < romanNumerals.length; i++) {
      values.push(
         romanNumerals[i]
            .split("")
            .map((e) => dictionary[e])
            .reduce((a, b) => a + b)
      );
   }
    let combinations = [];
    for (let j = 0; j < values.length; j++) {
        combinations.push(combinationSum([1,4,5,9,10,40,50,90,100,400,500,900,1000], values[j]))
    }
    combinations = combinations.sort((a,b) => a-b)
    for (let k = 0; k < combinations.length; k++) {
        combinations[k] = combinations[k].map(e => dict[e]).join("");
    }
    return combinations
};

console.log(calc());
