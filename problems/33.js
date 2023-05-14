const calc = () => {
  let nums = [], fractions = [], nominator = 1, denominator = 1;

  for (let i = 11; i < 100; i++) {
    i.toString().includes("0") ? undefined : nums.push(i);
  }

  for (let j of nums) {
    for (let k of nums) {
      const [f1, f2, s1, s2] = [j.toString().at(0), j.toString().at(1), k.toString().at(0), k.toString().at(1)].map(e => parseInt(e))
      j / k < 1 && j / k == f1 / s2 && f1 !== f2 && (f1 == s2 || f2 == s1) ? fractions.push([j, k]) : undefined;
    }
  }

  fractions.map(e => [nominator *= e[0], denominator *= e[1]]);
  let result = 1 / (nominator / denominator)
  return result;
}
