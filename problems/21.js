const calc = () => {
    let p = 0, o = 0, j = 1, k = 1, amicableNumbers = [];

    for (let i = 1; i < 10000; i++) {
        while(j < i){
            if (i % j == 0) p += j;
            j++;
        }
        
        while(k < p){
            if (p % k == 0) o += k;
            k++;
        }

        o == i && p != i ? amicableNumbers.push(i, p) : p = 0, o = 0, k = 0, j = 0;
    }
    return (amicableNumbers.reduce((a,b) => a + b)) / 2
}
