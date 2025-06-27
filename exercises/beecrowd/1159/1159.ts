// https://judge.beecrowd.com/pt/problems/view/1159
import * as fs from "fs";

function main(): void {
  const lines = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);
  let lineIndex = 0;

  while (true) {
    const x = lines[lineIndex++];
    if (x === 0) {
      break;
    }

    let startNumber = x;
    if (startNumber % 2 !== 0) {
      startNumber++;
    }

    let sum = 0;
    for (let i = 0; i < 5; i++) {
      sum += startNumber;
      startNumber += 2;
    }

    console.log(sum);
  }
}

main();
