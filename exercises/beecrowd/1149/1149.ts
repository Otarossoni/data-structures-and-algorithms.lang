// https://judge.beecrowd.com/pt/problems/view/1149
import * as fs from "fs";

function main(): void {
  const values = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split(/\s+/)
    .map(Number);

  const a = values[0];
  const n = values.find((v, i) => i > 0 && v > 0)!;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a + i;
  }

  console.log(sum);
}

main();
