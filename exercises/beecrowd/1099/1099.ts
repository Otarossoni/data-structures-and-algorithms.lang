// https://judge.beecrowd.com/en/problems/view/1099
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = parseInt(input[0]);

  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);

    if (x > y) [x, y] = [y, x];

    let sum = 0;
    for (let j = x + 1; j < y; j++) {
      if (j % 2 !== 0) sum += j;
    }

    console.log(sum);
  }
}

main();
