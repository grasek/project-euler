function divisors(num) {
   const divisors = [];
   const sqrt = Math.ceil(Math.sqrt(num));
   for (let i = 2; i < sqrt; i++) {
      if (num % i === 0) {
         divisors.push(i);
         if (i < sqrt) {
            divisors.push(num / i);
         }
      }
   }
   return divisors;
}
const calc = () => {
   function chainGenerator(num) {
       let elements = [num], p = 0;
      while (true) {
          let divisorsSum = divisors(elements[elements.length - 1]).reduce((a, b) => a + b, 0) + 1;
         if (elements[0] === elements[elements.length - 1] && elements.length > 1) return elements;
         if (elements.includes(divisorsSum)) p++;
         elements.push(divisorsSum);
         if (divisorsSum > 1000000 || p > 4 || elements[elements.length - 1] === 1) return [];
      }
   }
   let chains = [];

   for (let i = 1; i < 1000000; i++) {
      chains.push(chainGenerator(i));
   }
   chains = chains
      .filter((e) => !e.includes(1))
      .sort((a, b) => b.length - a.length);
   return chains[0].sort((a, b) => a - b);
};

console.log(calc());
