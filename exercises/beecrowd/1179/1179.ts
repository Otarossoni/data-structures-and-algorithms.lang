// https://judge.beecrowd.com/pt/problems/view/1179
import * as fs from "fs";

function main(): void {
  const lines: number[] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .map(Number);

  let lineIndex: number = 0;

  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];

  for (let i: number = 0; i < 15; i++) {
    const num: number = lines[lineIndex++];

    if (num % 2 === 0) {
      evenNumbers.push(num);
      if (evenNumbers.length === 5) {
        for (let j: number = 0; j < 5; j++) {
          console.log(`par[${j}] = ${evenNumbers[j]}`);
        }
        evenNumbers = [];
      }
    } else {
      oddNumbers.push(num);
      if (oddNumbers.length === 5) {
        for (let j: number = 0; j < 5; j++) {
          console.log(`impar[${j}] = ${oddNumbers[j]}`);
        }
        oddNumbers = [];
      }
    }
  }

  for (let i: number = 0; i < oddNumbers.length; i++) {
    console.log(`impar[${i}] = ${oddNumbers[i]}`);
  }

  for (let i: number = 0; i < evenNumbers.length; i++) {
    console.log(`par[${i}] = ${evenNumbers[i]}`);
  }
}

main();
