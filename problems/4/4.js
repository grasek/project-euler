const calc = () => {
  let a = 999, result = 0;
  while (a > 99) {
    let b = 999;
    while (b > 99) {
      if (a * b === parseInt([...(a * b).toString()].reverse().join("")) && a * b > result) result = a * b;
      b--;
    }
    a--;
  }
  return result;
};
