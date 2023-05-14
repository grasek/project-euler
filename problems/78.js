const calc = () => {

	const lim = 100000, mod = 7000000;
	const v = Array(lim).fill(0);
	v[0] = 1; v[1] = 1; v[2] = 2; v[3] = 3;

	for (let k = 4; k < lim; k++){
		let n = 0, p = 0, a = -1;
	
		for(let i = 1; i <= lim; i++){
			a += 3; p += a;
			let t = p-i;
			if(t > k) break;
			n += v[k - t] % mod;
			if(p > k) break;
			n += v[k - p] % mod;
			i++;
			a += 3; p += a;
			t= p - i;
			if(t > k) break;
			n -= v[k - t] % mod;
			if(p > k) break;
			n -= v[k - p] % mod;
		}
		if(n % mod === 0) return k;
		v[k]= n;
	}
}

console.log(calc());

