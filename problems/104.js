const calc = () => {
    const fibo = (num) => {
        let a = 0n, b = 1n, pan = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 2n; i <= num; i += 1n) {
            if(i % 10000n === 0n) console.log(i)
            const temp = b;
            b = a + b;
            a = temp;
            let digits = Array.from(String(b), Number);
            let first = digits.slice(0, pan.length);
            if (pan.every((e) => first.includes(e))) {
            let last = digits.slice(-pan.length);
            if(pan.every((e) => last.includes(e))) return i;
            }
        }

        return 'fd'
    };
    return fibo(1000000n)
    // for (let i = 0; i < terms.length; i++) {
    //     let pan = [1, 2, 3, 4, 5, 6, 7, 8, 9], digits = Array.from(String(terms[i]), Number);
    //     let first = digits.slice(0, 9), last = digits.slice(-9);
    //     if (pan.every(e => first.includes(e)) && pan.every(e => last.includes(e))) return i;
    // }
};
console.log(calc());
