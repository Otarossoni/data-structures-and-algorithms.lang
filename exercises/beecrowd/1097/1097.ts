// https://judge.beecrowd.com/en/problems/view/1097
function main(): void {
  for (let i = 1; i <= 9; i += 2) {
    let j = i + 6;
    for (let k = 0; k < 3; k++) {
      console.log(`I=${i} J=${j - k}`);
    }
  }
}

main();
