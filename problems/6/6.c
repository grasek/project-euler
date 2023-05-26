#include <stdio.h>
#include <math.h>

int main (void) {
	int res, squareSum, sumSquare;
	squareSum = sumSquare = 0;


	for(int i = 1; i <= 100; i++){
		squareSum += i * i;
		sumSquare += i;
	}
	
	res = sumSquare * sumSquare - squareSum;

	printf("%d\n", res);
	return 0;
}
