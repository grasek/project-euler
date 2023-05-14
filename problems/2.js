const calc = () => {
  let f1 = 0, f2 = 1, f3 = 1, result = 0;
  while (f3 <= 4000000) {
    f1 = f2; f2 = f3; f3 = f2 + f1;
    f3 % 2 === 0 ? result += f3 : undefined;
  }
  return result;
};
