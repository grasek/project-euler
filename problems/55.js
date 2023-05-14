const calc = () => {
  let result = 0, num = 10000;

  const isPalindrome = (num) => {
    const numStr = num.toString(), numStrRev = [...numStr].reverse().join("");
    return BigInt(numStr) === BigInt(numStrRev) ? true : false;
  }

  const isLycher = (val, i) => {
    while (i < 50) {
      if (isPalindrome(val) && i > 0) return false;
      val = val + BigInt([...val.toString()].reverse().join(""));
      i += 1;
    }
    return true;
  }

  for (let i = 0n; i < BigInt(num); i++) if (isLycher(i, 0)) result++;

  return result;
}
console.log(calc())
