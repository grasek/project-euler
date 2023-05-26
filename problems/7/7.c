#include <stdio.h>

int is_prime(int n) {
    if (n <= 1)
        return 0;
    if (n <= 3)
        return 1;
    if (n % 2 == 0 || n % 3 == 0)
        return 0;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return 0;
    }
    return 1;
}

int main (void) {
    int lim;
    printf("Enter the lim (n): ");
    scanf("%d", &lim);

    int count = 0;
    int n = 2;

    while (count < lim) {
        if (is_prime(n)) {
            count++;
            if (count == lim) {
                printf("The %dth prime number is: %d\n", lim, n);
                break;
            }
        }
        n++;
    }

    return 0;
}
