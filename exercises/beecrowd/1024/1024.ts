// https://judge.beecrowd.com/pt/problems/view/1024
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const numTestCases: number = parseInt(input[0], 10);
  let lineIndex: number = 1;

  for (let i = 0; i < numTestCases; i++) {
    let line: string = input[lineIndex++];
    let chars: string[] = line.split("");

    for (let j = 0; j < chars.length; j++) {
      const charCode: number = chars[j].charCodeAt(0);
      if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        chars[j] = String.fromCharCode(charCode + 3);
      }
    }

    chars.reverse();

    const halfIndex: number = Math.floor(chars.length / 2);
    for (let j = halfIndex; j < chars.length; j++) {
      const charCode: number = chars[j].charCodeAt(0);
      chars[j] = String.fromCharCode(charCode - 1);
    }

    console.log(chars.join(""));
  }
}

main();
