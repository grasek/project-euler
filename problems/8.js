import fs from 'fs';
const calc = () => {
  let data = fs.readFileSync("../assets/8.txt").toString().split("").map((e) => parseInt(e));
  const withoutZeros = data.reduce(
    (acc, val) => {
      if (val === 0) {
        if (acc[acc.length - 1].length > 0) {
          acc.push([]);
        }
      } else {
        acc[acc.length - 1].push(val);
      }
      return acc;
    },
    [[]]
  );
    let filtered = withoutZeros.filter(e => e.length > 12), results = [];
    for (let i = 0; i < filtered.length; ++i) {
        let arr = filtered[i];
        for (let j = 0; j < arr.length - 12; ++j) results.push((arr.slice(j,j + 13)).reduce((a,b) => a * b));
    }
    results =  results.sort((a,b) => b - a)
    return results[0]
};
