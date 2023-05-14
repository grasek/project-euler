import { SOA } from "../algorithms/sieveOfAtkin.js";

const calc = () => {
    const primes = SOA(10 ** 9).map(String), primeSet = ["3", "7", "109", "673"];
	for(let i = 100; i < primes.length; i++){
		let p = primes[i];
		if((p + primeSet[3]).length > primes[primes.length - 1].length) return ":&";
		let a = p + primeSet[3], b = primeSet[3] + p;
		if(primes.includes(a) && primes.includes(b)) {
			let c = p + primeSet[2], d = primeSet[2] + p;
			if(primes.includes(c) && primes.includes(d)){
				let e = p + primes[1], f = primes[1] + p;
				if(primes.includes(e) && primes.includes(f)){
					let g = p + primeSet[0], h = primeSet[0] + p;
					if(primes.includes(g) && primes.includes(h)) return p;
				}
			}
		}
	}
	console.log(primes)
	
};

console.log(calc());
