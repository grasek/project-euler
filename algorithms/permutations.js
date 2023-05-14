export function permutations(arr, len) {
  const result = [];

  function backtrack(arr, permutation = [], used = new Set()) {
    if (permutation.length === len) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used.has(i) || (i > 0 && arr[i] === arr[i - 1] && !used.has(i - 1))) {
        continue;
      }
      permutation.push(arr[i]);
      used.add(i);
      backtrack(arr, permutation, used);
      used.delete(i);
      permutation.pop();
    }
  }

  backtrack(arr);

  return result;
}

export function permutationsWithRepetitions(arr) {
  const result = [];

  function backtrack(arr, permutation = []) {
    if (permutation.length === arr.length) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      permutation.push(arr[i]);
      backtrack(arr, permutation);
      permutation.pop();
    }
  }

  backtrack(arr);

  return result;
}
