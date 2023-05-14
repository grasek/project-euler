import { calculateFraction } from '../algorithms/calculateFraction.js';

const gcd = (a, b) => b ? gcd(b, a % b) : a;

const calc = (a) => {

	const convergents = (a) => {
		const p = [0n,1n], q = [1n, 0n];
		for(let it of a){
			p.push(p[BigInt(p.length) - 1n] * it + p[BigInt(p.length) - 2n]);
			q.push(q[BigInt(q.length) - 1n] * it + q[BigInt(q.length) - 2n]);
		}
		return [p, q]
	}
	const cf = [2n,1n,2n];
	// 1 1 4 1 1 6 1 1 8 1 1 10
	let val = 4;
	for(let i = 1; i < 1000; i++){
		if(i % 3 === 0){ 
			cf.push(BigInt(val))
			val += 2;
		} else {
			cf.push(1n);
		}
	}
	let se = convergents(cf);
	return Array.from(String(se[0][101]), Number).reduce((a,b) => a + b)
}

console.log(calc(7));
