const calc = () => {
	/* slower solution
	 * const hyperbinary = (n) => {
		if(n === 0n || n === 1n) {
			result++;
			return;
		}
		if(n % 2n !== 0n) return hyperbinary((n - 1n) / 2n);
		if(n % 2n === 0n) return hyperbinary(n / 2n) + hyperbinary((n / 2n) - 1n);
	}
	hyperbinary(10n ** 10n)*/
	
	const str = (10n ** 25n).toString(2);
	let a = 1, b = 0;
	for(let i = 0; i < str.length; i++) str[i] === "0" ? a += b : b += a;
	return a;
}

console.log(calc());
