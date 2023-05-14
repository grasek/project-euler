export function divisors(num) {
  const divisors = [];
  const sqrt = Math.ceil(Math.sqrt(num));
  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i < sqrt) {
        divisors.push(num / i);
      }
    }
  }
  
  return divisors;
}