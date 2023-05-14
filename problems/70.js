const calc = () => {
   const totient = (n) => {
      let result = n;
      for (let i = 2; i * i <= n; i++) {
         if (n % i === 0) {
            while (n % i === 0) n /= i;
            result -= result / i;
         }
      }
      if (n > 1) result -= result / n;
      return result;
   };
    
    const isPermutation = (a, b) => {
        return Array.from(String(a), Number).sort((a, b) => a - b).join("") === Array.from(String(b), Number).sort((a, b) => a - b).join("") ? true : false;
    } 

    let result = 0, curr = 5;
    
    for (let i = 3; i < 10 ** 7; i+=1) {
        let tot = totient(i);
        if (isPermutation(i, tot) && i / tot < curr) result = i, curr = i / tot;
    }
    
    return result;
};

console.log(calc());
