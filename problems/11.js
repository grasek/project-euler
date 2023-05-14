import fs from "fs";

const calc = () => {
  const grid = Array.from(
      String(fs.readFileSync("../assets/11.txt", "utf-8")).split(" "),
      Number
    ),
    foursInColumns = [],
    foursInDiagoLR = [],
    foursInDiagoRL = [],
    fours = [];
  let result = [];

  for (let rows = 0; rows < grid.length - 3; rows++) {
    rows % 17 !== 0 || rows % 18 !== 0 || rows % 19 !== 0
      ? fours.push(grid.slice(rows, rows + 4))
      : undefined;
  }

  for (let columns = 0; columns < grid.length - 60; columns++) {
    for (let i = columns; i < columns + 61; i += 20) foursInColumns.push(grid[i]);
  }

  for (let diagoLR = 0; diagoLR < grid.length - 63; diagoLR++) {
    if (diagoLR == 0) {
      for (let j = diagoLR; j < diagoLR + 65; j += 21) foursInDiagoLR.push(grid[j]);
    } else if (diagoLR % 17 == 0 || diagoLR % 18 == 0 || diagoLR % 19 == 0) {
      continue;
    } else {
      for (let j = diagoLR; j < diagoLR + 65; j += 21) foursInDiagoLR.push(grid[j]);
    }
  }

  for (let diagoRL = 0; diagoRL < grid.length - 60; diagoRL++) {
    for (let k = diagoRL; k < diagoRL + 58; k += 19) {
      if (![0, 1, 2, 20, 21, 22].includes(diagoRL)) foursInDiagoRL.push(grid[k]);
    }
  }

  for (let r = 0; r < foursInColumns.length; r++) fours.push(foursInColumns.slice(r, r + 4));

  for (let o = 0; o < foursInDiagoRL.length; o++) fours.push(foursInDiagoRL.slice(o, o + 4));

  for (let p = 0; p < foursInDiagoLR.length; p++) fours.push(foursInDiagoLR.slice(p, p + 4));

  result += fours.map((element) => element.reduce((a, b) => a * b)).sort((c, d) => c - d).pop();

  return result;
};
