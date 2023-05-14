const calc = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function permutations(arr) {
    let fourDigits = [],
      threeDigits = [],
      twoDigits = [],
      result = [],
      oneDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function backtrack(arr, permutation = []) {
      if (permutation.length === 4) {
        fourDigits.push([...permutation]);
        return undefined;
      } else if (permutation.length === 3) {
        threeDigits.push([...permutation]);
      } else if (permutation.length === 2) {
        twoDigits.push([...permutation]);
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
    twoDigits = twoDigits.map((e) => parseInt(e.join("")));
    threeDigits = threeDigits.map((e) => parseInt(e.join("")));
    fourDigits = fourDigits.map((e) => parseInt(e.join("")));

    for (let n1 of twoDigits) {
      for (let n2 of threeDigits) {
        if (fourDigits.includes(n1 * n2)) {
          let vc = [
            ...new Set(
              Array.from(String(n1), Number)
                .concat(Array.from(String(n2), Number))
                .concat(Array.from(String(n1 * n2), Number))
            ),
          ];
          if (vc.length === 9) result.push(n1 * n2);
        }
      }
    }

    for (let n of oneDigits) {
      for (let n3 of threeDigits) {
        if (fourDigits.includes(n * n3)) {
          let cv = [
            ...new Set(
              Array.from(String(n), Number)
                .concat(Array.from(String(n3), Number))
                .concat(Array.from(String(n * n3), Number))
            ),
          ];
          if (cv.length === 9) result.push(n * n3);
        }
      }
    }

    for (let nk of oneDigits) {
      for (let no of fourDigits) {
        if (fourDigits.includes(nk * no)) {
          let vv = [
            ...new Set(
              Array.from(String(nk), Number)
                .concat(Array.from(String(no), Number))
                .concat(Array.from(String(nk * no), Number))
            ),
          ];
          if (vv.length === 9) result.push(nk * no);
        }
      }
    }

    result = [...new Set(result)];
    return result.reduce((a, b) => a + b);
  }
  return permutations(digits);
};