import { bb } from '../algorithms/bhaskaraBrouncker.js';

const calc = () => {
    let i = 2, result = [];
    const squares = Array.from({ length: 11 }, (_, i) => i ** 2);
    while (i < 100) {
        if (squares.includes(i)) {
            i++;
        } else {

            const sqrRoot = String(bb(BigInt(i)));
        result.push(sqrRoot.slice(0, 100).split(""))
        i++
        }

    }
    
    return result.map(e => e.map(Number).reduce((a,b) => a + b)).reduce((a,b) => a + b);
}

console.log(calc())
