const calc = () => {
	const sol = (n) => {
		let hash = new Array(n + 1).fill(true);
		for(let p = 2; p * p < n; p++){
			if(hash[p] === true){
				for(let i = p * 2; i < n; i+=p){
					hash[i] = false;
				}
			}
		}

		let total = 1;
		for(let p = 2; p <= n; p++){
			if(hash[p]){
				let count = 0;
				if(n % p === 0){
					while(n % p === 0){
						n = n/p;
						count++;
					}
					total = total * (2 * count + 1);
				}
			}
		}
		return Math.floor(total / 2) + 1;
	}

	for(let n = 1; true; n++){
		if(sol(n) >= 100) return n
	}
	return sol(1000)
};
console.log(calc());
