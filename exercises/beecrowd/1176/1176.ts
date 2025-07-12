// https://judge.beecrowd.com/pt/problems/view/1176
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const t = parseInt(lines[0]);

  const fib: number[] = [0, 1];
  for (let i = 2; i <= 60; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  for (let i = 1; i <= t; i++) {
    const n = parseInt(lines[i]);
    console.log(`Fib(${n}) = ${fib[n]}`);
  }
}

main();
