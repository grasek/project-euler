const calc = () => {
	let result = 0;
	const findPeriod = (num) => {
		let n = BigInt(num), u = BigInt(Math.floor(Math.sqrt(num)));
		let v = n - u * u;
		if (!v) return 0;
		let s = v, r = u, j = 0;

		do{
			u = (r + u)/v * v - u;
			v = (n - u * u) / v;
			j++;
		}while(!(u === r && v === s))
		return j;
	}
	for(let i = 1; i <= 10000; i++) if(findPeriod(i) % 2 !== 0) result++;
	return result;
}

console.log(calc());
