import { permutations } from '../algorithms/permutations.js';

const calc = () => {
  let sum = 0, digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let pandigitals = permutations(digits, digits.length);

  for (let e of pandigitals) {
    let a = parseInt([e[2], e[3], e[4]].join(""));
    let b = parseInt([e[4], e[5], e[6]].join(""));
    let c = parseInt([e[5], e[6], e[7]].join(""));
    let d = parseInt([e[6], e[7], e[8]].join(""));
    let f = parseInt([e[7], e[8], e[9]].join(""));
    let g = parseInt([e[3], e[4], e[5]].join(""));
    let h = parseInt([e[1], e[2], e[3]].join(""));

    if (
      h % 2 === 0 &&
      g % 5 === 0 &&
      a % 3 === 0 &&
      b % 7 === 0 &&
      c % 11 === 0 &&
      d % 13 === 0 &&
      f % 17 === 0
    ) {
      sum += parseInt((e.join("")).toString())
    }
  }

  return sum;
}
