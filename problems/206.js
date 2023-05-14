const calc = () => {
    let num = 1389019070n;
    while (true) {
        let square = Array.from(String(num ** 2n), Number);
        if (square[2] === 2 && square[4] === 3 && square[6] === 4 && square[8] === 5 && square[10] === 6 && square[12] === 7 && square[14] === 8 && square[16] == 9) return num;
        num = num + 2n;
    }
}

console.log(calc())