// https://judge.beecrowd.com/pt/problems/view/1165
import * as fs from "fs";

function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  const sqrtNum: number = Math.sqrt(num);
  for (let i: number = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function main(): void {
  const lines: number[] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  let lineIndex: number = 0;
  const numTestCases: number = lines[lineIndex++];

  for (let i: number = 0; i < numTestCases; i++) {
    const currentNum: number = lines[lineIndex++];

    if (isPrime(currentNum)) {
      console.log(`${currentNum} eh primo`);
    } else {
      console.log(`${currentNum} nao eh primo`);
    }
  }
}

main();
