const calc = () => {
  let result = 0, tnums = [], pnums = [], hnums = [];
  function triangle(num) {
    return (num * (num + 1)) / 2;
  }

  function pentagonal(num) {
    return (num * (3 * num - 1)) / 2;
  }

  function hexagonal(num) {
    return num * (2 * num - 1);
  }

  for (let i = 286; i < 100000; i++) tnums.push(triangle(i));

  for (let k = 166; k < 100000; k++) pnums.push(pentagonal(k));

  for (let j = 144; j < 100000; j++) hnums.push(hexagonal(j));

  for (let l = 0; l < tnums.length; l++) {
    if (pnums.indexOf(tnums[l]) !== -1 && hnums.indexOf(tnums[l]) !== -1) result += tnums[l];
  }

  return result;
}
