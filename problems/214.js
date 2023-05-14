import { SOA } from '../algorithms/sieveOfAtkin.js';

const calc = (lim) => {
	const primes = SOA(lim);
	const arr = Array.from({length: lim}, (_, i) => i++);
	let result = [];
	for(let i = 2; i <= lim; i++){
		if(arr[i] === i){
			for(let j = i; j <= lim; j += i){
				arr[j] -= arr[j] / i;
			}
		}
	}

	for(let k = 0; k < primes.length; k++){
		let p = 0, num = arr[primes[k]];
		while(p < 23){
			if(arr[num] !== 1) {
				p++;
				num = arr[num];
			} else {
				break;
			}
		}
		if(p === 22) result.push(primes[k]);
	}
	return result.reduce((a, b) => a + b);

}

console.log(calc(40000000));
