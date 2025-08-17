// https://judge.beecrowd.com/pt/problems/view/1478
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);
  let lineIndex = 0;

  while (true) {
    const n = input[lineIndex++];
    if (n === 0) {
      break;
    }

    const matrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        const value = Math.abs(i - j) + 1;
        matrix[i][j] = value;
      }
    }

    for (let i = 0; i < n; i++) {
      let rowString = "";
      for (let j = 0; j < n; j++) {
        rowString += String(matrix[i][j]).padStart(3, " ");
        if (j < n - 1) {
          rowString += " ";
        }
      }
      console.log(rowString);
    }
    console.log();
  }
}

main();
