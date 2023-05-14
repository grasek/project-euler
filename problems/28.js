const calc = () => {
  let result = 1, diff = 2, num = 1, nums = 1;
  while (nums <= 2000) {
    for (let k = 0; k < 4; k++) num = num + diff, result += num;
    nums += 4, diff += 2;
  }
  return result;
};
