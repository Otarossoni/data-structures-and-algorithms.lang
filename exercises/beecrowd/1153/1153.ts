// https://judge.beecrowd.com/pt/problems/view/1153
import * as fs from "fs";

function main(): void {
  const n = parseInt(fs.readFileSync("/dev/stdin", "utf8").trim());

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  console.log(result);
}

main();
