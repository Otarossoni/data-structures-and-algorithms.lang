// https://judge.beecrowd.com/en/problems/view/1098
function format(n: number): string {
  if (n % 10 === 0) {
    return (n / 10).toString();
  }
  return (n / 10).toFixed(1);
}

function main(): void {
  for (let i = 0; i <= 20; i += 2) {
    for (let j = 1; j <= 3; j++) {
      console.log(`I=${format(i)} J=${format(i + j * 10)}`);
    }
  }
}

main();
