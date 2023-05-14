import fs from 'fs';

const data = fs.readFileSync('../assets/keylog.txt', 'utf8');

const f = (arr) => {
	return [...new Set(arr)];
}

const calc = () => {
	const attempts = [...new Set(data.split("\n"))].map(e => e.split(""));
		let first = [], second = [], third = [];
	for(let i = 0; i < attempts.length; i++){
		first.push(attempts[i][0]);
		second.push(attempts[i][1]);
		third.push(attempts[i][2]);
	}
	return attempts;
}
// after returning unique attempts I deducated solution using pen and paper
console.log(calc());
