// https://judge.beecrowd.com/pt/problems/view/1133
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
  const x = lines[0];
  const y = lines[1];
  
  const start = Math.min(x, y);
  const end = Math.max(x, y);
  
  for (let i = start + 1; i < end; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}

main();
