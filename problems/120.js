const calc = () => {
    let result = 0n;
    
    function findR(num) {
        let result = 0n;
        for (let n = 0n; n <= num + 1500; n++) {
            let r = (BigInt(num - 1) ** n + BigInt(num + 1) ** n) % BigInt(num ** 2);
            if (r > result) result = r;
            else continue;
        }
        return result;
    }
    
    for (let a = 3; a <=1000; a++) {
        result += findR(a);
    }
    
    return result;
}