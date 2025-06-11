// https://judge.beecrowd.com/pt/problems/view/1150
import * as fs from "fs";

function main(): void {
  const numbers = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split(/\s+/)
    .map(Number);

  const x = numbers[0];
  const z = numbers.find((v, i) => i > 0 && v > x)!;

  let sum = 0;
  let count = 0;
  let current = x;

  while (sum <= z) {
    sum += current;
    current++;
    count++;
  }

  console.log(count);
}

main();
