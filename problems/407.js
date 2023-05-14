const calc = (lim) => {
    let result = 0, n = 1;
	while(n <= lim){
		let a = 0, valid = 0;
		while(a < n){
			if(a === a ** 2 % n) valid = a;
			a++;
		}
		result += valid;
		n++;
	}

	if(n % 10 ** 4 === 0) console.log(result);
    return result;
}

console.log(calc(10 ** 7))
