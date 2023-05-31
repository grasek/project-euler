const calc = () => {
    let result = 1n;
    for (let i = 1n; i < 100n; i++) result *= i;
    return Array.from(String(result.toString()), Number).reduce((a, b) => a + b);
}
