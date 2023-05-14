import { SOA } from '../algorithms/sieveOfAtkin.js'

const isPalindrome = (num) => {
  let digits = Array.from(String(num));
  for (let i = 0; i < digits.length; i++) {
    if(digits[i] !== digits[digits.length - i - 1]) return false;
  }
  
  return true;
}

const calc = () => {
  const primes = SOA(10 ** 9 * 2);
  const squareOfPrime = primes.map(e => e ** 2);
  const result = [];
  for (let i = 0; i < squareOfPrime.length; i++) {
    if (isPalindrome(squareOfPrime[i])) continue;
    let rev = Array.from(String(squareOfPrime[i]), Number).reverse().join("");
    if (squareOfPrime.includes(parseInt(rev))) result.push(squareOfPrime[i]);
  }
  return result;
  
}

console.log(calc())

// [
//                 4,               9,             121,
//               169,             961,           10201,
//             12769,           94249,           96721,
//           1042441,         1062961,         1216609,
//           1442401,         1692601,         9066121,
//         121066009,       900660121,     12148668841,
//       12367886521,     12568876321,     14886684121,
//     1000422044521,   1002007006009,   1020506060401,
//     1040606050201,   1210684296721,   1212427816609,
//     1212665666521,   1214648656321,   1234367662441,
//     1236568464121,   1254402240001,   1256665662121,
//     1276924860121,   1442667634321,   9006007002001,
//     9066187242121, 100042424498641, 100222143232201,
//   100240164024001, 100402824854641, 100420461042001,
//   102014060240401, 102232341222001, 104042060410201,
//   121264386264121, 121462683462121, 123212686214641,
//   146412686212321, 146458428204001
// ]
