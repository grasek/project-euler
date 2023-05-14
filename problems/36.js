const calc = () => {
  let result = 0, num = 1000000;
  function bin(dec) {
    return (dec >>> 0).toString(2);
  }
  function isPalindromic(num) {
    num = num.toString();
    function rev(str) {
      return [...str].reverse().join("");
    }
    if (num.length % 2 !== 0) {
      let partA = num.slice(0, num.length / 2), partB = num.slice(num.length / 2 + 1, num.length);
      if (partA === rev(partB)) return true;
    } else {
      let partA = num.slice(0, num.length / 2),  partB = num.slice(num.length / 2, num.length);
      if (partA === rev(partB)) return true;
    }
    return false;
  }
  for (let i = 1; i <= num; i++) {
    isPalindromic(i) && isPalindromic(bin(i)) ? result += i : undefined;
  }
  return result;
}