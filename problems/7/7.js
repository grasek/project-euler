const calc = () => {
    const result = [];
    let isPrime = new Array(110000).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < isPrime.length; i++) {
        if (isPrime[i] === true) {
            for (let j = 2 * i; j < isPrime.length; j += i) isPrime[j] = false;
        }
    }
    for (let k = 0; k < isPrime.length; k++) {
        isPrime[k] === true ? result.push(k) : undefined;
    }
    return result[10001];
};
