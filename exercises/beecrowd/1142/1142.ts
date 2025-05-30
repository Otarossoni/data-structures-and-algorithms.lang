// https://judge.beecrowd.com/pt/problems/view/1142
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
  const n = parseInt(input);

  let count = 1;

  for (let i = 0; i < n; i++) {
    console.log(`${count} ${count + 1} ${count + 2} PUM`);
    count += 4;
  }
}

main();
