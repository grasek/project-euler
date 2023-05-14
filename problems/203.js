import {divisors} from '../algorithms/divisors.js';
import { SOA } from '../algorithms/sieveOfAtkin.js';

const calc = () => {
	const maxn = 50;
	let primes = SOA(10 ** 7);
	let c = new Array(maxn + 1).fill().map(() => new Array(maxn + 1));
	c[0][0] = 1;
	for(let n = 1; n < maxn; ++n){
		c[n][0] = c[n][n] = 1;
		for(let k = 1; k < n; ++k){
			c[n][k] = c[n - 1][k - 1] + c[n - 1][k];
		}
	}
	let distVals = [...new Set(c.flat())], squarefree = [];
	for(let i = 0; i < distVals.length; i++){
		if(divisors(distVals[i]).map(e => Math.sqrt(e)).some(e => primes.includes(e))) continue;
		squarefree.push(distVals[i]);
	}
	return squarefree.reduce((a,b) => a + b);
}
