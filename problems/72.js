function totient(n) {
  let result = n;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      while (n % i === 0) n /= i;
      result -= result / i;
    }
  }
  if (n > 1) result -= result / n;
  return result;
}

const calc = () => {
   let result = 0;
   for (let i = 2; i <= 1000000; i++) result += totient(i);
   return result
}

console.log(calc())