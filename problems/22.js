import fs from 'fs';

const calc = () => {
    const names = fs.readFileSync('../assets/names.txt', 'utf-8');
    const vals = {
        "A": 1,"B": 2,"C": 3,"D": 4,"E": 5,"F": 6,"G": 7,"H": 8,"I": 9,"J": 10,"K": 11,"L": 12,"M": 13,"N": 14,"O": 15,"P": 16,"Q": 17,"R": 18,"S": 19,"T": 20,"U": 21,"V": 22,"W": 23,"X": 24,"Y": 25,"Z": 26,
    }
    let sum = 0
    let r = names.split(`","`).sort().map(e => e.split("").map(e => vals[e])).map(e => e.reduce((a,b) => a+b))
    for(let u = 1; u <= r.length; u++){
        sum += u * (r[u - 1])
    }
    return sum
}
