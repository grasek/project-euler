export function combinationSum(candidates, target) {
    const result = [];
    function backtrack(combination, start, sum) {
        if (sum === target) {
            result.push([...combination]);
            return undefined;
        }
        
        if (sum > target) {
            return undefined;
        }
        
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(combination, i, sum + candidates[i]);
            combination.pop();
        }
    };
    backtrack([], 0, 0);
    return result;
}