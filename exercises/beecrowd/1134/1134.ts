// https://judge.beecrowd.com/pt/problems/view/1134
import * as fs from "fs";

function main(): void {
  const inputs = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

  let alcohol = 0;
  let gasoline = 0;
  let diesel = 0;
  
  for (const code of inputs) {
    if (code === 1) {
      alcohol++;
    } else if (code === 2) {
      gasoline++;
    } else if (code === 3) {
      diesel++;
    } else if (code === 4) {
      break;
    }
  }
  
  console.log("MUITO OBRIGADO");
  console.log(`Alcool: ${alcohol}`);
  console.log(`Gasolina: ${gasoline}`);
  console.log(`Diesel: ${diesel}`);
}

main();
