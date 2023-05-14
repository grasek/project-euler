import { permutations } from "../algorithms/permutations.js";
const calc = () => {
  const cubes = Array.from({ length: 9000 }, (_, i) => i ** 3).map(e => Array.from(String(e), Number).sort((a, b) => a - b).join(""));
  const mostFrequent = (arr) => {
    return Object.entries(
      arr.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {})
    ).reduce((a, b) => a[1] > b[1] ? a : b)
  }
  let mf = mostFrequent(cubes);
  let i = cubes.indexOf(mf[0]);
  return i ** 3
}

console.log(calc())
