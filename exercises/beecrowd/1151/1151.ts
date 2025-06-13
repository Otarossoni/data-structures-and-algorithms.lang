// https://judge.beecrowd.com/pt/problems/view/1151
import * as fs from "fs";

function main(): void {
  const n = parseInt(fs.readFileSync("/dev/stdin", "utf8").trim());

  let a = 0,
    b = 1;
  let result = "";

  for (let i = 0; i < n; i++) {
    result += i === 0 ? `${a}` : ` ${a}`;
    const next = a + b;
    a = b;
    b = next;
  }

  console.log(result);
}

main();
