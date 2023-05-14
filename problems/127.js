import { factorize } from "../algorithms/factorize.js";
import { SOA } from "../algorithms/sieveOfAtkin.js";

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const rad = (num) => [...new Set(factorize(num))].reduce((a, b) => a * b);

const group = (arr) =>
    Object.values(
        arr.reduce(
            (acc, curr) => ((acc[curr] = [...(acc[curr] || []), curr]), acc),
            {}
        )
    )
        .map((e) => e.reduce((a, b) => a * b))
        .sort((a, b) => a - b);

const calc = () => {
    const primes = SOA(10 ** 7);
    let result = 0;
    for (let i = 0; true; i++) {
        if (primes.includes(i)) continue;
        let factors = factorize(i);
        let gr = group(factors);
        if (gr.length !== 3 || gr[0] + gr[1] !== gr[2]) continue;
        if (
            gr[0] >= gr[1] ||
            rad(gr.reduce((a, b) => a * b)) >= group[2] ||
            gcd(gr[0], gr[1]) !== 1 ||
            gcd(gr[0], gr[2]) !== 1 ||
            gcd(gr[1], gr[2]) !== 1
        )
            continue;
        result += gr[2];
        if (gr[2] >= 1000) return result;
    }
};

console.log(calc());
