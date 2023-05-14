import { isPalindrome } from "../algorithms/isPalindrome.js";

const calc = () => {
  const palindromes = [];
  let result = 0;
  for (let i = 10 ** 8; i > 0; i--) {
    isPalindrome(String(i)) ? palindromes.push(i) : undefined;
  }
  function isSumOfConsecutiveSquares(num) {
    let arr = [1,2], product = 5;
    const sqr = Math.floor(Math.sqrt(num));
    while (arr[arr.length - 1] <= sqr && arr.length > 1) {
        if (product === num) return true;
        else if (product < num)  product += ((arr[arr.length - 1] + 1) ** 2), arr = [...arr, arr[arr.length - 1] + 1];
        else if (product > num) product -= arr[0] ** 2, arr.splice(0, 1);
    }
    return false;
  }
   for (let j = 0; j < palindromes.length; j++) {
     isSumOfConsecutiveSquares(palindromes[j])
       ? (result += palindromes[j])
       : undefined;
  }
  return result;
};

console.log(calc());
