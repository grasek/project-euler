import { factorial } from "../algorithms/factorial.js";

const calc = () => {
  let sum = 0;
  for (let x = 3; x < 10000000; x++) {
    let qq = 0;
    for (let i = 0; i < x.toString().length; i++) {
      qq += factorial(parseInt(x.toString().charAt(i)));
    }
    if (qq === x) sum += x;
  }
  return sum;
};
