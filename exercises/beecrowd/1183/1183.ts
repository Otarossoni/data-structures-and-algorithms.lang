// https://judge.beecrowd.com/pt/problems/view/1183
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const op = input[0];
  const values = input.slice(1).map(Number);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      if (j > i) {
        sum += values[i * 12 + j];
        count++;
      }
    }
  }

  if (op === "M") {
    sum /= count;
  }

  console.log(sum.toFixed(1));
}

main();
