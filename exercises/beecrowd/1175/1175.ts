// https://judge.beecrowd.com/pt/problems/view/1175
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  const n: number[] = input.slice(0, 20);

  for (let i = 0; i < 10; i++) {
    [n[i], n[19 - i]] = [n[19 - i], n[i]];
  }

  for (let i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${n[i]}`);
  }
}

main();
