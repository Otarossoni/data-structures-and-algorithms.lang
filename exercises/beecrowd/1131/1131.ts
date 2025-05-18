// https://judge.beecrowd.com/pt/problems/view/1131
import * as fs from "fs";

function main(): void {
  const lines = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  let index = 0;

  let interWins = 0;
  let gremioWins = 0;
  let draws = 0;
  let totalGames = 0;

  while (true) {
    const [interGoals, gremioGoals] = lines[index++].split(' ').map(Number);

    if (interGoals > gremioGoals) interWins++;
    else if (gremioGoals > interGoals) gremioWins++;
    else draws++;

    totalGames++;

    console.log("Novo grenal (1-sim 2-nao)");
    const option = Number(lines[index++]);
    if (option !== 1) break;
  }

  console.log(`${totalGames} grenais`);
  console.log(`Inter:${interWins}`);
  console.log(`Gremio:${gremioWins}`);
  console.log(`Empates:${draws}`);

  if (interWins > gremioWins) {
    console.log("Inter venceu mais");
  } else if (gremioWins > interWins) {
    console.log("Gremio venceu mais");
  } else {
    console.log("Nao houve vencedor");
  }
}

main();
