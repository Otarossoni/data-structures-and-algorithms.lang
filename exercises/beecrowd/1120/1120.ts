// https://judge.beecrowd.com/pt/problems/view/1120
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  let lineIndex = 0;

  while (true) {
    const line = input[lineIndex++].split(" ");
    const digitToRemove = line[0];
    const numberString = line[1];

    if (digitToRemove === "0" && numberString === "0") {
      break;
    }

    const result = numberString.split(digitToRemove).join("");

    if (result === "") {
      console.log("0");
      continue;
    }

    let firstNonZero = 0;
    while (firstNonZero < result.length - 1 && result[firstNonZero] === "0") {
      firstNonZero++;
    }

    console.log(result.substring(firstNonZero));
  }
}

main();
