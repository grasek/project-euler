export function SOS(limit) {
   limit = Math.floor(limit / 2);
   let bits = new Array(limit + 1).fill(true);
   for (let i = 1; 3 * i + 1 < limit; i++) {
      for (let j = 1; i + j + 2 * i * j <= limit; j++) {
         bits[i + j + 2 * i * j] = false;
      }
   }
   let primes = [2];
   for (let i = 1; i <= limit; i++) {
      if (bits[i]) {
         primes.push(2 * i + 1);
      }
   }
   return primes;
}
