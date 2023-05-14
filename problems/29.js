const calc = () => {
    const sequence = [];
    for (let a = 2; a < 101; a++) {
        for (let b = 2; b < 101; b++) !sequence.includes(a ** b) ? sequence.push(a ** b) : undefined;
    }
    return sequence.length;
};
