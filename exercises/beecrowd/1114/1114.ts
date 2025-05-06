// https://judge.beecrowd.com/pt/problems/view/1114
import * as fs from "fs";

function main(): void {
  const inputs = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

  for (const senha of inputs) {
    if (senha === 2002) {
      console.log("Acesso Permitido");
      break;
    } else {
      console.log("Senha Invalida");
    }
  }

}

main();
