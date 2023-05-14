import { factorial } from '../algorithms/factorial.js';

const calc = () => {
    let result = 0;
    function chain(num, terms = []) {
        terms.push(num);
        const next = Array.from(String(num), Number).map(e => factorial(e)).reduce((a,b) => a + b);
        return terms.includes(next) ? terms.length : chain(next, terms);  
    }
    
    for (let i = 1; i < 1000000; i++) {
        chain(i, []) === 60 ? result++ : undefined;
    }
    
    return result;
}

console.log(calc())