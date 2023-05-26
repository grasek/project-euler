#include <stdio.h>

int main (void) {
	int lim, sum, i;
	i = sum = 0;
	scanf("%d", &lim);

	while(i < lim){
		if(i % 3 == 0 || i % 5 == 0) sum += i;
		i++;
	}

	printf("%d\n", sum);
	return 0;
}
