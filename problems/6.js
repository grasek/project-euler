const calc = () => {
    let i = 1, sumOfSquares = 0, squareOfSum = 0;
    while (i < 101) {
        sumOfSquares += i * i, squareOfSum += i, i++;
    }
    return squareOfSum ** 2 - sumOfSquares;
};
