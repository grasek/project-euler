#include <stdio.h>
#include <stdbool.h>
#include <string.h>

unsigned long long SieveOfEratosthenes(int n) {
    unsigned long long res = 0ULL;
    bool prime[n + 1];
    memset(prime, true, sizeof(prime));

    for (int p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }

    for (int p = 2; p <= n; p++) {
        if (prime[p]) {
            res += p;
        }
    }

    return res;
}

int main(void) {
    int lim;
    scanf("%d", &lim);

    unsigned long long sum = SieveOfEratosthenes(lim);
    printf("Sum of the primes is %llu\n", sum);
    return 0;
}
