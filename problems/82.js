import fs from 'fs';
const grid = fs.readFileSync('../assets/matrix.txt', 'utf8').split("\n").map(e => e.split(",").map(e => parseInt(e)));

const compute = () => {
    const h = grid.length, w = grid[0].length, INFINITY = 2 ** 30;
    
    const getValue = (x, y) => {
        if (x < 0) {
            return 0;
        }
        else if (y < 0 || y >= h || x >= w) {
            return INFINITY;
        }
        else {
            return dist[y][x];
        }
    }
    
    const dist = [];
    for (let i = 0; i < h; i++) {
        dist.push(Array(w).fill(0));
    }
    
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            dist[y][x] = grid[y][x] + Math.min(getValue(x - 1, y), getValue(x, y - 1));
        }
        
        for (let y = h - 1; y >= 0; y--) {
            dist[y][x] = Math.min(grid[y][x] + getValue(x, y + 1), dist[y][x]);
        }
    }
    
    let ans = Math.min.apply(null, dist.map(function(row) {
        return row[w - 1];
    }));
    
    return ans.toString();
}
