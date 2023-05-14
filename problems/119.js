const calc = () => {
const lim = 30;
let c = 1;
const main = () => {
	let res = 0;
  for (let i = 2; true; i++) {
    for (let j = 2; j < 1000; j++) {
      if (sumOfDigits(j ** i) !== j) continue;
   	res = j ** i;
	    c++;
    }
    if (c > lim) break;
  }
	return res
}

const sumOfDigits = (val) => {
  let sum = 0;
  while (val !== 0) {
    sum += val % 10;
    val = Math.floor(val / 10);
  }
  return sum;
}
return main();
}
console.log(calc());
