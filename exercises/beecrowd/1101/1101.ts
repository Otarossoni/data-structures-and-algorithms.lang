// https://judge.beecrowd.com/en/problems/view/1101
import * as fs from "fs";

function main(): void {
  const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

  for (const line of input) {
    const [mRaw, nRaw] = line.split(" ").map(Number);
    let m = mRaw;
    let n = nRaw;

    if (m <= 0 || n <= 0) break;

    if (m > n) [m, n] = [n, m];

    let sum = 0;
    const sequence: number[] = [];

    for (let i = m; i <= n; i++) {
      sequence.push(i);
      sum += i;
    }

    console.log(`${sequence.join(" ")} Sum=${sum}`);
  }
}

main();
