import { SOA } from '../algorithms/sieveOfAtkin.js';

const factorial = (num) => {return num > 1n ? (factorial(num - 1n) * num) : num;}

const calc = () => {
	const primes = SOA(10 ** 6);
	let result = 0n;
	for(let i = 1; i < primes.length; i++){
		let sum = 0n;
		for(let j = 1n; j <= 5n; j += 1n){
			sum += factorial(BigInt(primes[i]) - j);
		}
		result += sum % BigInt(primes[i])
	}
	return result;
}

console.log(calc())
