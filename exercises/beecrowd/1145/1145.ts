// https://judge.beecrowd.com/pt/problems/view/1145
import * as fs from "fs";

function main(): void {
  const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split(" ")
    .map(Number);
  const x = input[0];
  const y = input[1];

  let output = "";

  for (let i = 1; i <= y; i++) {
    output += i;

    if (i % x === 0) {
      output += "\n";
    } else {
      output += " ";
    }
  }

  console.log(output.trim());
}

main();
