const calc = () => {
	const modExp = (base, exp, mod) => {
		if(mod === 1) return 0;
		let result = 1;
		base = base % mod;
		while(exp > 0){
			if(exp % 2 === 1) result = (result * base) % mod;
			exp = exp >> 1;
			base = (base * base) % mod;
		}
		return result;
	}
	let result = 0;
	for(let i = 0; i < 1854; i++){
		result = modExp(1777, result, 10 ** 8);
	}
	return result;

}

console.log(calc());
