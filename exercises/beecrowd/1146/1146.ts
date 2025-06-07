// https://judge.beecrowd.com/pt/problems/view/1146
import * as fs from "fs";

function main(): void {
  const inputs = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  for (const x of inputs) {
    if (x === 0) break;

    let line = "";
    for (let i = 1; i <= x; i++) {
      line += i === x ? `${i}` : `${i} `;
    }

    console.log(line);
  }
}

main();
