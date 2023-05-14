import { permutations } from "../algorithms/permutations.js";
const calc = () => {
  const perms = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
  return perms[999999].join("");
}
