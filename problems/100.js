const calc = () => {
    const limit = 1000;
    let i = 1;
    while (i < limit) {
        if ((i / limit) * ((i - 1) / (limit - 1)) == 1 / 2) return i;
        i++;
    }
}

console.log(calc())