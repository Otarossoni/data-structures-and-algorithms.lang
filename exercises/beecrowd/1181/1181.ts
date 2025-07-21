// https://judge.beecrowd.com/pt/problems/view/1181
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const l = parseInt(input[0]);
  const op = input[1];

  const matrix = input.slice(2).map(Number);
  let sum = 0;

  for (let j = 0; j < 12; j++) {
    sum += matrix[l * 12 + j];
  }

  if (op === "M") {
    sum /= 12;
  }

  console.log(sum.toFixed(1));
}

main();
