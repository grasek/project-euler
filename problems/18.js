import fs from "fs";

const calc = () => {
  const graph = fs.readFileSync("../assets/maxPathSum.txt", "utf-8").toString().split("],[").map((e) => e.split(" ")).map((e) => e.map((el) => parseInt(el))), res = [];
  const maxPathSum = (graph) => {
    for (let r = graph.length - 1; r > 0; r--) {
      let lastRow = graph[r], aboveRow = graph[r - 1];
      for (let i = 0; i < aboveRow.length; i++) {
        if (aboveRow[i] + lastRow[i] > aboveRow[i] + lastRow[i + 1]) {
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
};
