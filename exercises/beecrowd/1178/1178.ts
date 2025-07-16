// https://judge.beecrowd.com/pt/problems/view/1178
import * as fs from "fs";

function main(): void {
  const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());

  const x: number[] = new Array(100);

  x[0] = n;

  for (let i: number = 1; i < 100; i++) {
    x[i] = x[i - 1] / 2.0;
  }

  for (let i: number = 0; i < 100; i++) {
    console.log(`N[${i}] = ${x[i].toFixed(4)}`);
  }
}

main();
