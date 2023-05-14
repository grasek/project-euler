function consecutivePrimeSum(num) {
  let primes = [];
  function sieveOfEratosthenes(num) {
    let primes = [];
    let arr = new Array(num).fill(true);
    arr[0] = false;
    arr[1] = false;
    for (let i = 2; i < Math.sqrt(arr.length); i++) {
      if (arr[i] !== false) {
        for (let k = i * 2; k < arr.length; k += i) {
          if (arr[k] == true) {
            arr[k] = false;
          }
        }
      }
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == true) {
        primes.push(j);
      } else {
        continue;
      }
    }
    return primes;
  }

  primes = sieveOfEratosthenes(num);

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
        combination.push(candidates[i]);
        backtrack(combination, i, sum + candidates[i]);
        combination.pop();
      }
    }
    backtrack([], 0, 0);

    function hasDuplicate(arr) {
      let seen = {};
      for (let num of arr) {
        if (seen[num]) {
          return true;
        }
        seen[num] = true;
      }
      return false;
    }

    function areConsecutives(arr, primes){
        let start = primes.indexOf(arr[0]);
        if(start === -1 || start + arr.length > primes.length){
            return false;
        }

        for(let i = 1; i < arr.length; i++){
            if(arr[i] !== primes[start + i]){
                return false;
            }
        }

        return true;
    }

    let correctResults = [];

    for (let e of result) {
      if (hasDuplicate(e) == false) {
        correctResults.push(e);
      }
    }

    let ultimate = []

    correctResults = correctResults.sort((a, b) => b.length - a.length);

    for(let e of correctResults){
        if(areConsecutives(e, primes) == true){
            ultimate.push(e)
            break;
        }
    }
    ultimate = (ultimate.flat()).sort((a,b) => b.length - a.length);
    let sum = ultimate;

    return sum.sort((a,b) => a.length - b.length);
  }

  let lengthsOfPrimesSum = [];
  

  for (let prime of primes) {
    lengthsOfPrimesSum.push(combinationSum(primes, prime));
  }
  lengthsOfPrimesSum.sort((a, b) => b - a);
  return ((lengthsOfPrimesSum.sort((a,b) => a.length - b.length)).pop()).reduce((a,b) => a+b);
}
-
console.log(consecutivePrimeSum(1000000));
