import fs from 'fs';

const data = fs.readFileSync("../assets/triangles.txt", "utf-8").split("\n").map(e => e.split(",").map(Number));

const calc = () => {
    let result = 0;
    for (let t of data) {
        const a = Math.abs(t[0] * t[3] - t[1] * t[2] - (t[0] * t[5] - t[1] *t [4]) + t[2] * t[5] - t[3] * t[4]);
        let i1 = Math.abs(t[0] * t[3] - t[2] * t[1]), i2 = Math.abs(t[2] * t[5] - t[4] * t[3]), i3 = Math.abs(t[0] * t[5] - t[4] * t[1]);
        if (a == i1 + i2 + i3) result++;
    }
    return result;
}

console.log(calc())