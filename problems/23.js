const calc = () => {
    let abundant = [], abundantSums = [], nonAbundants = [];
    for (let i = 1; i < 28123; i++) {
        let tempSum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) tempSum += j;
        }
        tempSum > i ? (abundant.push(i), tempSum = 0) : tempSum = 0;
    }
    for (let k = 0; k < abundant.length; k++) {//
        for (let p = k; p < abundant.length; p++) abundantSums.push(abundant[k] + abundant[p]);
    }
    for (let l = 1; l < 28123; l++) {
        if (abundantSums.indexOf(l) == -1) nonAbundants.push(l);
    }

    return nonAbundants.reduce((a, b) => a + b)
}
