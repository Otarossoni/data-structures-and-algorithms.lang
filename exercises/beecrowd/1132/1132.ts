// https://judge.beecrowd.com/pt/problems/view/1132
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
  const x = lines[0];
  const y = lines[1];

  const start = Math.min(x, y);
  const end = Math.max(x, y);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
}

main();
