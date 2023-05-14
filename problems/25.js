const calc = () => {
    let result = 0;
    function fibonacci(a, b, c) {
        a = b; b = c; c = b + a;
        if ([...c.toString()].length >= 1000) {
            return result + 4;
        } else {
            result++;
            return fibonacci(a, b, c);
        }
    }
    return fibonacci(1n, 1n, 2n);
};
