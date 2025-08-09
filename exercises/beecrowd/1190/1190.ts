// https://judge.beecrowd.com/pt/problems/view/1190
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const operation = input[0];
  const values = input.slice(1).map(Number);

  let sum = 0;
  let count = 0;

  for (let i = 1; i < 11; i++) {
    const limit = Math.min(i, 11 - i);

    for (let j = 12 - limit; j < 12; j++) {
      sum += values[i * 12 + j];
      count++;
    }
  }

  if (operation === "M") {
    sum /= count;
  }

  console.log(sum.toFixed(1));
}

main();
