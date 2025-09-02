// https://judge.beecrowd.com/pt/problems/view/1534
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);
  let lineIndex = 0;

  while (lineIndex < input.length) {
    const n = input[lineIndex++];

    if (isNaN(n)) {
      break;
    }

    const matrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        if (i + j === n - 1) {
          matrix[i][j] = 2;
        } else if (i === j) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 3;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      let rowString = "";
      for (let j = 0; j < n; j++) {
        rowString += String(matrix[i][j]);
      }
      console.log(rowString);
    }
  }
}

main();
