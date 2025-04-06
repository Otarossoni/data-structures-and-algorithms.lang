// https://judge.beecrowd.com/pt/problems/view/1144
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim();
  const n = parseInt(input);

  for (let i = 1; i <= n; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
    console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
  }
}

main();
