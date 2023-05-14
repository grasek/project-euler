import { permutations } from '../algorithms/permutations.js';
const calc = () => {
    const digits = Array.from({ length: 10 }, (_, i) => [i,i]).flat();
    return permutations(digits, 20)
}

console.log(calc());