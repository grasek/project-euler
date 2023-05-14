import fs from 'fs';
const calc = () => {

  const dictionaryGenerator = () => {
    let dictionary = {}, val = 1;
    for (let i = 97; i <= 122; ++i) {
      let key = String.fromCharCode(i);
      dictionary[key] = val;
      val++;
    }
    return dictionary;
  }

  const triangleNumbersGenerator = () => {
    let triangleNumbers = [];
    for (let i = 0; i < 40; ++i) triangleNumbers.push((i / 2) * (i + 1));

    return triangleNumbers;
  }

  const [dictionary, triangleNumbers] = [dictionaryGenerator(), triangleNumbersGenerator()]

  function isTriangleNumber(){
    const data = fs.readFileSync('../assets/words.txt', 'utf-8');
    let words = data.split(",").map(e => (e.split("")).slice(1,-1)), result = 0, val = 0;
    for(let word of words){
        for(let letter of word) val += dictionary[letter.toLowerCase()]
        if(triangleNumbers.includes(val)){
            result++;
            val = 0;
        } else{
            val = 0;
            continue;
        }
    }
    return result;
  }

  let result = isTriangleNumber()
  return result;
}
