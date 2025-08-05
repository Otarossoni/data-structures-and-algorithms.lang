// https://judge.beecrowd.com/pt/problems/view/1188
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const operation = input[0];
  const values = input.slice(1).map(Number);

  let sum = 0;
  let count = 0;

  for (let i = 7; i < 12; i++) {
    for (let j = 12 - i; j < i; j++) {
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
