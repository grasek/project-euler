const calc = () => {
    const powersOfTwo = Array.from({ length: 76 }, (_, i) => 2 ** i);
    return powersOfTwo
}

console.log(calc())