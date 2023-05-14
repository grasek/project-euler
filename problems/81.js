import fs from "fs";
const calc = () => {
	const grid = fs.readFileSync("../assets/matrix.txt", "UTF-8").split("\n").map(e => e.split(",").map(e => parseInt(e)));
const H = grid.length, W = grid[0].length;
  const dp = new Array(H).fill().map(() => new Array(W).fill(0)); // copy of grid filled with 0

  for(let row = 0; row < H; ++row) {
    for(let col = 0; col < W; ++col) {
      if(row == 0 && col == 0) {
        dp[row][col] = grid[row][col];
      }
      else {
        dp[row][col] = grid[row][col] + 
Math.min((row == 0 ? Number.MAX_VALUE : dp[row-1][col]), (col == 0 ? Number.MAX_VALUE : dp[row][col-1]));
      }
    }
  }
  return dp[H-1][W-1];}	

console.log(calc());
