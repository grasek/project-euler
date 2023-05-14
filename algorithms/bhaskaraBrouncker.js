export const bb = (val, k = 2n) => {
    val *= 10n ** 206n;
	let old = 0n, x = val;
    
    while (x ** k !== k && x !== old) {
		old = x;
		x = ((k - 1n) * x + val / x ** (k - 1n)) / k;
	}
    
	return x;
}