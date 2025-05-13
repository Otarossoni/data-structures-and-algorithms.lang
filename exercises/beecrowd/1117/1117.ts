// https://judge.beecrowd.com/pt/problems/view/1117
import * as fs from "fs";

function main(): void {
  const inputs = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

  let validCount = 0;
  let sum = 0;

  for (const grade of inputs) {
    if (grade < 0 || grade > 10) {
      console.log("nota invalida");
    } else {
      sum += grade;
      validCount++;
    }

    if (validCount === 2) {
      const average = sum / 2;
      console.log(`media = ${average.toFixed(2)}`);
      break;
    }
  }
}

main();
