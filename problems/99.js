import fs from 'fs';

const data = fs.readFileSync("../assets/base_exp.txt", "utf-8");

const log = (a, b) => b * Math.log10(a);

const calc = () => {
    const nums = data.split("\n").map(e => e.split(",").map(e => Number(e)));
    const sor = nums.map(e => [log(e[0], e[1]), nums.indexOf(e)]).sort((a,b) => b[0] - a[0]);
    return sor[0][1] + 1;
    
}

console.log(calc())