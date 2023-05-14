const calc = () => {
	let res = 0;
	for (let n = 0; n <  2 ** 30; n++){
		(n ^ n * 2 ^ n * 3) === 0 ? res++ : null;
	}
	return res;
}

console.log(calc());
