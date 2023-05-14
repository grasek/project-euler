import fs from 'fs';

const calc = () => {
  const data = fs.readFileSync("../assets/triangle.txt", "utf-8");
  const graph = data
    .toString()
    .split("endOfRow")
    .map((e) => e.split(" "))
    .map((e) => e.map((el) => parseInt(el)));

  const res = [];
  function maxPathSum(graph) {
    for (let r = graph.length - 1; r > 0; r--) {
      let lastRow = graph[r], aboveRow = graph[r - 1];
      for (let i = 0; i < aboveRow.length; i++) {
        if (aboveRow[i] + lastRow[i] >= aboveRow[i] + lastRow[i + 1]) {
          aboveRow[i] = aboveRow[i] + lastRow[i];
          res.push(aboveRow[i]);
        } else if (aboveRow[i] + lastRow[i] < aboveRow[i] + lastRow[i + 1]) {
          aboveRow[i] = aboveRow[i] + lastRow[i + 1];
          res.push(aboveRow[i]);
        }
      }
    }
  }

  maxPathSum(graph);

  res.sort((a, b) => b - a);
  return res[0];
}
