import { divisors } from "../algorithms/divisors.js";

const calc = () => {
  let triangular = 1, difference = 2;
 function sequence(triangular, difference) {
    if (divisors(triangular).length > 500) {
      return triangular;
    } else {
      return sequence(triangular + difference, difference + 1);
    }
  }
  return sequence(triangular, difference);
};
