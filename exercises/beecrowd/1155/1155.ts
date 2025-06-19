// https://judge.beecrowd.com/pt/problems/view/1155
function main(): void {
  let s = 0;

  for (let i = 1; i <= 100; i++) {
    s += 1 / i;
  }

  console.log(s.toFixed(2));
}

main();
