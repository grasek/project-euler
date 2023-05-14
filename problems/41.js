const calc = () => {
  function factorize(num) {
    const factors = [];
    let divisor = 2;

    while (num > 1) {
      while (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      }
      divisor++;
      if (divisor * divisor > num) {
        if (num > 1) factors.push(num);
        break;
      }
    }
    return factors;
  }

  function permutations(arr) {
    const result = [];

    function backtrack(arr, permutation = []) {
      if (permutation.length === arr.length) {
        result.push([...permutation]);
        return undefined;
      }

      for (let i = 0; i < arr.length; i++) {
        if (permutation.includes(arr[i])) {
          continue;
        }

        permutation.push(arr[i]);
        backtrack(arr, permutation);
        permutation.pop();
      }
    }

    backtrack(arr);
    return result.map((e) => parseInt(e.join("")));
  }

  let digits = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let pandigitals = permutations(digits);
  function pandigitalPrime(pandigitals) {
    for (let i = 0; i < pandigitals.length; i++) {
      let isPrime = factorize(pandigitals[i]);
      if (isPrime.length === 1) {
        return pandigitals[i];
      }
    }
    digits.splice(0, 1);
    return pandigitalPrime(permutations(digits));
  }
    
  return pandigitalPrime(pandigitals) || false;
};
