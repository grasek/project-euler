const calc = () => {
    return ((BigInt(2 ** 1000).toString().split("")).map(e => parseInt(e))).reduce((a, b) => a + b);
}
