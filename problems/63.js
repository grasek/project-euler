const calc = () => {
  let result = 0;
  for (let i = 1; i < 200000; i++) {
    for (let p = 1; p < 50; p++) {
      let digits = Array.from(String(i ** p), Number).length;
      if (digits > p) {
        break;
      } else if (digits < p) {
        continue;
      } else {
          result++;
      }
    }
  }
  return result;
};

console.log(calc())
