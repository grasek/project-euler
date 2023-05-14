const calc = () => {
    let result = [];
    for (let i = 0; i < 8000; i++) {
        result.push(parseInt(Array.from(String(2 ** i), Number).splice(0,4).join("")));
    }
    return result
}

console.log(calc());