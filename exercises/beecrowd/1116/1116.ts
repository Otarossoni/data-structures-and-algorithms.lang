// https://judge.beecrowd.com/pt/problems/view/1116
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = parseInt(lines[0]);

  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if (y === 0) {
      console.log("divisao impossivel");
    } else {
      const result = x / y;
      console.log(result.toFixed(1));
    }
  }
}

main();
