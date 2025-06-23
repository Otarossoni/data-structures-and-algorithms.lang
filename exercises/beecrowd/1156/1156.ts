// https://judge.beecrowd.com/pt/problems/view/1156
function main(): void {
  let S: number = 0.0;
  let numerator: number = 1.0;
  let denominator: number = 1.0;

  for (let i = 0; i < 20; i++) {
    S += numerator / denominator;
    numerator += 2;
    denominator *= 2;
  }

  console.log(S.toFixed(2));
}

main();
