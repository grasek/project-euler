export function calculateFraction(n1, n2, precision) {
   let dividend = BigInt(n1),
      divisor = BigInt(n2),
      quotient = "";

   for (let i = 0; i < precision; i++) {
      dividend *= BigInt(10);
      let digit = Number(dividend / divisor);
      quotient += digit;
      dividend -= BigInt(digit) * divisor;
   }

   return "0." + quotient;
}