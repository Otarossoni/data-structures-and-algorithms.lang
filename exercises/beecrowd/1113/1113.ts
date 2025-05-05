// https://judge.beecrowd.com/pt/problems/view/1113
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

  for (const line of input) {
    const [x, y] = line.split(" ").map(Number);

    if (x === y) break;

    if (x < y) {
      console.log("Crescente");
    } else {
      console.log("Decrescente");
    }
  }
}

main();
