// https://judge.beecrowd.com/pt/problems/view/1172
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);
  const x: number[] = [];

  for (let i = 0; i < 10; i++) {
    x[i] = input[i] <= 0 ? 1 : input[i];
    console.log(`X[${i}] = ${x[i]}`);
  }
}

main();
