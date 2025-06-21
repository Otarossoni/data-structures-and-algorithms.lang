// https://judge.beecrowd.com/pt/problems/view/1157
import * as fs from "fs";

function main(): void {
  const n = parseInt(fs.readFileSync("/dev/stdin", "utf8").trim());

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

main();
