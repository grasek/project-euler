#include <stdio.h>

unsigned divisor_count(unsigned long n)
{
  unsigned ret = 1;
  unsigned long i;

  for (i = 2; i <= n; i++) {
    unsigned c = 0;
    while (n % i == 0) {
      c++;
      n /= i;
    }
    ret *= c+1;
  }
  return ret;
}

int main(void)
{
  unsigned long i = 1, n = 1, lim;

  scanf("%lu", &lim);
	
  while (divisor_count(n) < lim) {
    n += ++i;
  }
  printf("%lu\n", n);
  return 0;
}


