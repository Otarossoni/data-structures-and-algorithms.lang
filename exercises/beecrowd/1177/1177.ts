// https://judge.beecrowd.com/pt/problems/view/1177
import * as fs from "fs";

function main(): void {
  const n: number = Number(fs.readFileSync("/dev/stdin", "utf8").trim());

  const T: number[] = new Array(1000);

  for (let i: number = 0; i < 1000; i++) {
    T[i] = i % n;
    console.log(`N[${i}] = ${T[i]}`);
  }
}

main();
