// https://judge.beecrowd.com/pt/problems/view/1115
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

  for (const line of lines) {
    const [x, y] = line.split(' ').map(Number);
    if (x === 0 || y === 0) break;
    
    if (x > 0 && y > 0) {
      console.log("primeiro");
    } else if (x < 0 && y > 0) {
      console.log("segundo");
    } else if (x < 0 && y < 0) {
      console.log("terceiro");
    } else if (x > 0 && y < 0) {
      console.log("quarto");
    }
  }
}

main();
