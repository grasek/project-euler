#include <stdio.h>
#include <string.h>

int isPalindrome (int n) {
	char str[1024];
	sprintf(str, "%d", n);
	int l = strlen(str);

	for(int i = 0; i < l / 2; i++){
		if(str[i] != str[l - i - 1]) return 0;
	}

	return 1;
}

int main (void) {
	int res = 0;
	for(int i = 999; i > 900; i--){
		for(int j = 999; j > 900; j--){
			if(i * j > res && isPalindrome(i * j)) res = i * j;
		}
	}

	printf("%d\n", res);
	return 0;
}
