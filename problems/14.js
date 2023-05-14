const calc = () => {
    let result = 0, previousMostSteps = 0, currentSteps = 0
    for (let n = 1000000; n > 500000; n--) {
        let c = n
        while (c > 1) c % 2 == 0 ? (c = c / 2, currentSteps++) : (c = 3 * c + 1, currentSteps++);
        currentSteps > previousMostSteps ? (previousMostSteps = currentSteps, currentSteps = 0, result = n) : (currentSteps = 0);
    }
    return result
}
