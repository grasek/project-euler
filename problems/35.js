import { SOE } from "../algorithms/sieveOfEratosthenes.js";
import { rotations } from "../algorithms/rotations.js";

const calc = () => {
  let num = 1000000;
  const result = [],
    primes = SOE(num);

  for (let i = 1; i < primes.length; i++) {
    let k = rotations(Array.from(String(primes[i]), Number)).map((e) =>
        parseInt(e.join(""))
      ),
      p = 0;
    for (let j = 0; j < k.length; j++) {
      if (primes.includes(k[j])) {
        p++;
      } else {
        p = 0;
        break;
      }
    }
    if (p === k.length) {
      result.push(primes[i]);
    }
  }

  return result.length + 1;
}