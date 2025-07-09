// https://judge.beecrowd.com/pt/problems/view/1174
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  for (let i = 0; i < 100; i++) {
    const value = input[i];
    if (value <= 10.0) {
      console.log(`A[${i}] = ${value.toFixed(1)}`);
    }
  }
}

main();
