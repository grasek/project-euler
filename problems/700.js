const calc = () => {
    let modulus = 4503599627370517n, num = 1504170715041707n, j = 1n, result = 0n, coins = [];
    while (j < 1000000000) {
        let p = 0;
        for (let i = 0; i < coins.length; i++) {
            if(num * j % modulus < coins[i]) p++;
        }
        if (p === coins.length) coins.push(num * j % modulus);
        j += 1n;
    }
    return coins.reduce((a, b) => a + b);
}

console.log(calc());