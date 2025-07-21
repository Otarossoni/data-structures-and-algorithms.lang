// https://judge.beecrowd.com/pt/problems/view/1180
import * as fs from "fs";

function main(): void {
  const [nStr, valuesStr] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n");
  const n = parseInt(nStr);
  const values = valuesStr.split(" ").map(Number);

  let min = values[0];
  let pos = 0;

  for (let i = 1; i < n; i++) {
    if (values[i] < min) {
      min = values[i];
      pos = i;
    }
  }

  console.log(`Menor valor: ${min}`);
  console.log(`Posicao: ${pos}`);
}

main();
