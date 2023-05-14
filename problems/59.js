import fs from 'fs';

const alphabeticalValues = () => {
	let dict = {};
	for(let i = 97; i < 122; i++){
		const key = String.fromCharCode(i);
		dict[i] = key;
	}
	return dict;
}

const isLetter = (char) => {
	return (/^[a-zA-Z]$/.test(char)) ? true : false;
}

const calc = () => {
	let passwds = [], decrypted = []
    let cipher = String(fs.readFileSync('../assets/cipher.txt', 'utf-8')).split(",").map(e => parseInt(e))
    	for(let j = 114; j < 122; j++){
		for(let k = 97; k < 122; k++){
			for(let l = 97; l < 122; l++){
				passwds.push([l, k, j])
			}
		}
	}
	for(let passwd of passwds){
		let pas = [];	
		for(let i = 0; i < 6; i++){
	
		if((i + 1) % 3 === 0) {
			pas.push(cipher[i] ^ passwd[2]);
			continue
		}
		if((i + 1) % 2 === 0) {
			pas.push(cipher[i] ^ passwd[1]);
			continue
		}
		if((i + 1) % 1 === 0) {
			pas.push(cipher[i] ^ passwd[0]);
			continue
		}
	}
		decrypted.push(pas, passwd);
	}
	decrypted = decrypted.map(e => e.map(i =>String.fromCharCode(i)).join(""));
	fs.writeFileSync('debug.txt', '');
decrypted.forEach((element) => {
  fs.appendFileSync('debug.txt', element + '\n');
});
}   

console.log(isLetter(calc()))
