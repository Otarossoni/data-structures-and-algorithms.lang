// https://judge.beecrowd.com/en/problems/view/1098
function main(): void {
  for (let i = 0; i < 2.1; i += 0.2) {
    for (let j = 1; j <= 3; j++) {
      if (i % 1 === 0) {
        console.log(`I=${i.toFixed(0)} J=${(i + j).toFixed(0)}`);
      } else {
        console.log(`I=${i.toFixed(1)} J=${(i + j).toFixed(1)}`);
      }
    }
  }
}

main();
