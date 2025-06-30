// https://judge.beecrowd.com/pt/problems/view/1160
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
  const t = parseInt(lines[0]);

  for (let i = 1; i <= t; i++) {
    let [pa, pb, g1, g2] = lines[i].trim().split(" ").map(Number);

    let years = 0;

    while (pa <= pb && years <= 100) {
      pa += Math.floor((pa * g1) / 100);
      pb += Math.floor((pb * g2) / 100);
      years++;
    }

    if (years > 100) {
      console.log("Mais de 1 seculo.");
    } else {
      console.log(`${years} anos.`);
    }
  }
}

main();
