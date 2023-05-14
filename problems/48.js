const calc = () => {
   let result = 0n;
   for (let i = 1n; i <= 1000n; i += 1n) {
      result += Number((i ** i));
   }
    result = Array.from(String(result), Number);
    return result.slice(result.length - 10, result.length - 1).join("")
};
console.log(calc())
