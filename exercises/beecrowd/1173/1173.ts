// https://judge.beecrowd.com/pt/problems/view/1173
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim();
  let v = parseInt(input);

  for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${v}`);
    v *= 2;
  }
}

main();
