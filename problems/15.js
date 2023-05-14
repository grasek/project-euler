const calc = () => {
    let x = 20, y = 20, a = 40;
    for(let i = 1; i < 40; i++) a *= i;
    for(let j = 1; j < 20; j++) x *= j;
    for(let k = 1; k < 20; k++) y *= k;
    let b = x * y
    return parseInt(a / b)
}
