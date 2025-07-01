// https://judge.beecrowd.com/pt/problems/view/1164
import * as fs from "fs";

function main(): void {
  const lines: number[] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  let lineIndex: number = 0;
  const numTestCases: number = lines[lineIndex++];

  for (let i: number = 0; i < numTestCases; i++) {
    const num: number = lines[lineIndex++];

    if (num <= 1) {
      console.log(`${num} nao eh perfeito`);
      continue;
    }

    let sumDivisors: number = 1;

    const sqrtNum: number = Math.sqrt(num);
    for (let j: number = 2; j <= sqrtNum; j++) {
      if (num % j === 0) {
        sumDivisors += j;
        if (j * j !== num) {
          sumDivisors += num / j;
        }
      }
    }

    if (sumDivisors === num) {
      console.log(`${num} eh perfeito`);
    } else {
      console.log(`${num} nao eh perfeito`);
    }
  }
}

main();
