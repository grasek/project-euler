//10 ** 9 * 2 max limit

export const SOA = (limit) => {
  const sqrtLimit = Math.sqrt(limit), primes = [2, 3], sieve = new Uint8Array(Math.ceil(limit / 8)).fill(0);

  for (let x = 1; x <= sqrtLimit; x++) {
    for (let y = 1; y <= sqrtLimit; y++) {
      let n = (4 * x * x) + (y * y);
      n <= limit && (n % 12 === 1 || n % 12 === 5) ? sieve[Math.floor(n / 8)] ^= 1 << (n % 8) : null;

      n = (3 * x * x) + (y * y);
      n <= limit && n % 12 === 7 ? sieve[Math.floor(n / 8)] ^= 1 << (n % 8) : null;

      n = (3 * x * x) - (y * y);
      x > y && n <= limit && n % 12 === 11 ? sieve[Math.floor(n / 8)] ^= 1 << (n % 8) : null;
    }
  }

  for (let n = 5; n <= sqrtLimit; n++) {
    if ((sieve[Math.floor(n / 8)] & (1 << (n % 8))) !== 0) {
      const nSquared = n * n;
      for (let k = nSquared; k <= limit; k += nSquared) sieve[Math.floor(k / 8)] &= ~(1 << (k % 8));
    }
  }

  for (let n = 5; n <= limit; n++) {
    (sieve[Math.floor(n / 8)] & (1 << (n % 8))) !== 0 ? primes.push(n) : null;
  }

  return primes;
};
