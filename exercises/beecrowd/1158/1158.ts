// https://judge.beecrowd.com/pt/problems/view/1158
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const n = parseInt(lines[0]);

  for (let i = 1; i <= n; i++) {
    let [x, y] = lines[i].trim().split(" ").map(Number);

    if (x % 2 === 0) {
      x++;
    }

    let sum = 0;
    for (let j = 0; j < y; j++) {
      sum += x + 2 * j;
    }

    console.log(sum);
  }
}

main();
