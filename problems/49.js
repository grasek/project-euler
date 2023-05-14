import { SOE } from '../algorithms/sieveOfEratosthenes.js';
import { permutations } from '../algorithms/permutations.js'; 
const calc = () => {
  const primes = SOE(10000)
    .filter((e) => e > 1000 && e < 10000)
    .sort((a, b) => b - a);
  const primeWithPrimePerms = [];

  for (let i = 0; i < primes.length; i++) {
    let primePerms = 0;
    let perm = permutations(Array.from(String(primes[i]), Number));
    for (let k = 0; k < perm.length; k++) {
      if (primes.includes(perm[k])) {
        primePerms++;
        if (primePerms === 3) {
          primeWithPrimePerms.push(primes[i]);
        }
      }
    }
  }

  for (let l = 0; l < primeWithPrimePerms.length; l++) {
      for (let j = l + 1; j < primeWithPrimePerms.length; j++) {
      if ((permutations(Array.from(String(primeWithPrimePerms[l]), Number)).includes(primeWithPrimePerms[j]))) {
          let cc = primeWithPrimePerms[j] - primeWithPrimePerms[l];
        if (primeWithPrimePerms.includes(primeWithPrimePerms[j] + cc) && (permutations(Array.from(String(primeWithPrimePerms[l]), Number)).includes(primeWithPrimePerms[j] +cc))) {
          return`${primeWithPrimePerms[j] + cc}${primeWithPrimePerms[j]}${primeWithPrimePerms[l]}`;
        }
      }
    }
  }

  return primeWithPrimePerms.sort((a, b) => a - b);
}

console.log(calc());
