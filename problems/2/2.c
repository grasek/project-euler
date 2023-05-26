#include <stdio.h>

int main (void) {
	int sum, a, b, temp, lim;
	a = b = 1;
	sum = temp = 0;
	scanf("%d", &lim);

	while(b < lim) {
		if(b % 2 == 0) sum += b;
		temp = a;
		a = b;
		b = a + temp;
	}

	printf("%d", sum);
	return 0;
}
