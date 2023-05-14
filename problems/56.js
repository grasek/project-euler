const calc = () => {
    const digitSum = (num) => Array.from(String(num), Number).filter(e => Number.isInteger(e)).reduce((a, b) => a + b);
    let result = 0;
    for (let a = 50n; a < 100n; a += 1n) {
        for (let b = 50n; b < 100n; b += 1n) {
            digitSum(a ** b) > result ? result =digitSum(a ** b) : null 
        }
    }
    return result;
}

console.log(calc())
