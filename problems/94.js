const calc = () => {
	let i = 3, result = [];
	while(i + 2 * (i - 1) < 10 ** 9){
		if(i % 2 !== 0){
			let h1 = Math.sqrt(Number(BigInt(i) ** 2n - ((BigInt(i) - 1n) / 2n) ** 2n));
			if(Number.isInteger(h1)) result.push([i, i, i + 1]);
		} else {	
			let h2 = Math.sqrt(Number((BigInt(i) - 1n) ** 2n - (BigInt(i) / 2n) ** 2n));
			if(Number.isInteger(h2)) result.push([i - 1, i - 1, i]);
		} 
		i++;
	}
	return result.flat().reduce((a,b) => a + b);
}

console.log(calc());
