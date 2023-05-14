const calc = () => {
	const phiToN = (n) => {
		const phi = Int32Array.from({length: n}, (_, i) => i++);
		for(let i = 2; i < n; i++){
			if(phi[i] === i) {
				for(let j = i; j <= n; j+= i) phi[j] -= phi[j] / i
			}
		}
		return phi;
	}

   	const arr = phiToN(2 ** 30 - 1);
	for(let i = 2; i < arr.length; i += 2){
		if(arr[i] / (i - 1) < 15499 / 94744) return i;
	}
}

console.log(calc());
