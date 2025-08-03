// https://judge.beecrowd.com/pt/problems/view/1187
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const operation = input[0];
  const values = input.slice(1).map(Number);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 11 - i; j++) {
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
