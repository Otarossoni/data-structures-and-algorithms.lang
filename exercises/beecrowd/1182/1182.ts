// https://judge.beecrowd.com/pt/problems/view/1182
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const c = parseInt(input[0]);
  const op = input[1];

  const values = input.slice(2).map(Number);
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += values[i * 12 + c];
  }

  if (op === "M") {
    sum /= 12;
  }

  console.log(sum.toFixed(1));
}

main();
