const calc = () => {
  let result = 0, num = 0;
  const notAllowed = [0, 2, 4, 6, 8];
  while (num < 1000000000) {
    const reversedNum = (Array.from(String(num), Number)).reverse();
      if (reversedNum[0] !== 0) {
          const isRev = num + parseInt(reversedNum.join(""));
          const isRevArr = Array.from(String(isRev), Number);
          if (
              !notAllowed.some((e) => isRevArr.includes(e)) &&
              isRevArr[0] !== 0 &&
              isRevArr[isRevArr.length - 1] !== 0
          )
              result++;
          num += 1;
      } else {
          num += 1;
      }
  }
  return result;
};

console.log(calc());
