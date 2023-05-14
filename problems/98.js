import fs from 'fs';

const data = fs.readFileSync("../assets/words.txt", "utf-8");
    
const maxSquare = (pair) => {
	const letters = pair[0].split("");
	for(let i = 9; i > 2; i--){
		for(let j = i - 1; j > 1; j--){
			for(let k = j - 1; k > 0; k--){
				
			}
		}
	}
	return letters;
}

const calc = () => {
    const words = data.slice(1, -1).split(`","`).filter(e => e.length < 10).map(e => e.split("")), pairs = [];
    const copy = words;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j === i) continue;
            let a = copy[i].slice().sort().join(""), b = copy[j].slice().sort().join("");
            if(a === b) pairs.push([words[i].join(""), words[j].join("")])
        }
        words.filter(e => words.indexOf(e) !== i);
    }
    
    let anagrams = [... new Set(pairs.map(e => e.sort().join("")))].map(e => [e.substring(0, e.length / 2), e.substring(e.length/2, e.length)])
		

	return maxSquare(["ACT", "CAT"]);
}

console.log(calc())
