// https://judge.beecrowd.com/pt/problems/view/1143
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
  const n = parseInt(input);

  for (let i = 1; i <= n; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
  }
}

main();
