export function factorize(num) {
   const factors = [];
    let divisor = 2;

    while (num > 1) {
      while (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      }
      divisor++;
      if (divisor * divisor > num) {
        if (num > 1) factors.push(num);
        break;
      }
    }
    return factors;
}