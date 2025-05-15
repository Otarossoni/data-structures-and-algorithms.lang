// https://judge.beecrowd.com/pt/problems/view/1118
import * as fs from "fs";

function main(): void {
  const inputs = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
  let index = 0;

  while (true) {
    let validCount = 0;
    let sum = 0;

    while (validCount < 2) {
      const grade = inputs[index++];
      if (grade >= 0 && grade <= 10) {
        sum += grade;
        validCount++;
      } else {
        console.log("nota invalida");
      }
    }

    const average = sum / 2;
    console.log(`media = ${average.toFixed(2)}`);

    let option;
    while (true) {
      option = inputs[index++];
      console.log("novo calculo (1-sim 2-nao)");
      if (option === 1 || option === 2) break;
    }

    if (option === 2) break;
  }
}

main();
