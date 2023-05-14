import fs from 'fs';
const calc = () => {
    const sum = Array.from(String(fs.readFileSync('../assets/13.txt')).split("\n"), Number).reduce((a, b) => BigInt(a) + BigInt(b));
    return (Array.from(String(sum), Number)).slice(0,10).join("");
}
