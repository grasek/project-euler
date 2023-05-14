const calc = (x) => {
	let cache = new Array(300).fill(0);

	const dp = (d, a = 0, l = 0) => {
		if(a === 3) return 0;
		if(l > 1) return 0;
		if(d === 0) return 1;
		let hash = d * 2 * 3 + a * 2 + l;

		if(cache[hash] !== 0) return cache[hash];

		let result;
		result = dp(d - 1, 0, l);
		result += dp(d - 1, a + 1, l);
		result += dp(d - 1, 0, l + 1);
		cache[hash] = result;
		return result;
	}

		return(dp(x))
}

console.log(calc(30))
