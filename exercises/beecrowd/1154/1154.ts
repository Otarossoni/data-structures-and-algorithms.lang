// https://judge.beecrowd.com/pt/problems/view/1154
import * as fs from "fs";

function main(): void {
  const inputs = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  let sum = 0;
  let count = 0;

  for (const age of inputs) {
    if (age < 0) break;
    sum += age;
    count++;
  }

  const average = sum / count;
  console.log(average.toFixed(2));
}

main();
