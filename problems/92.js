const calc = () => {
    let num = 10000000, result = 0;
    const squareDigit = (num) => {
        if(num === 89){
            result++;
            return undefined;
        } else if(num === 1){
            return undefined;
        } else{
            num = ((Array.from(String(num), Number)).map(e => e ** 2)).reduce((a,b) => a + b);
            squareDigit(num);
        }
    }
    for(let i = 1; i < num; i++){
        squareDigit(i);
    }
    return result;
}