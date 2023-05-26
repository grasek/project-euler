#include <stdio.h>

int main(void) {
    int res = 0;

    for (int a = 1; a < 500; a++) {
        for (int b = a; b < 500; b++) {
            int c = 1000 - a - b;
            if (a * a + b * b == c * c) {
                res = a * b * c;
                printf("%d\n", res);
                return 0;
            }
        }
    }

    printf("%d\n", res);
    return 0;
}
