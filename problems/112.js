const calc = () => {
  let bouncyNumbers = 0,
    num = 100;
  while (true) {
    let m = 0, l = 0, digits = Array.from(String(num), Number);
    for (let i = 0; i <= digits.length - 1; i++) {
      digits[i + 1] > digits[i] ? m++ : undefined;
      digits[i + 1] < digits[i] ? l++ : undefined;
    }
    m > 0 && l > 0 ? bouncyNumbers++ : undefined;
    if (bouncyNumbers / num >= 0.99) {
      return num;
    }
    num++;
  }
};

console.log(calc());
