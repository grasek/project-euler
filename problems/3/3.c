#include <stdio.h>

int main(void)
{
  unsigned long long n, i;

  scanf("%llu", &n);

  for (i = 2ULL; i < n; i++) {
    while (n % i == 0) {
      n /= i;
    }
  }
  printf("%llu\n", n);

  return 0;
}
