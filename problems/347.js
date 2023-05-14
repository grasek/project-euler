import { factorize } from '../algorithms/factorize.js'

const calc = () => {
    let result = 0;
    
        const pairs = [];
    for (let i = 10 ** 7; i > 0; i--) {
        let divs = [...new Set(factorize(i))];
        if (divs.length === 2 && !pairs.includes(parseInt(divs.join("")))) result += i, pairs.push(parseInt(divs.join("")));;
    }
    
    return result;
}

console.log(calc())