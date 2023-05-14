const dp = (x) => {
	const f = [1, 2];
	for(let i = 2; i  < x; i++){
		f[i] = f[i - 1] + f[i - 2]
	}
	return f;
}

console.log(dp(29))
