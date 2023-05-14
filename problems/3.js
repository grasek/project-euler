const calc = () => {
  let num = 600851475143, factors = [], divisor = 2;
  while (num > 2) {
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
  return factors[factors.length - 1]
};
