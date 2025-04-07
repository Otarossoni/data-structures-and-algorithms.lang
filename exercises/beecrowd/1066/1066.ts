// https://judge.beecrowd.com/pt/problems/view/1066
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/).filter(Boolean);

	const values = lines.slice(0, 5).map(Number);

	let even = 0;
	let odd = 0;
	let positive = 0;
	let negative = 0;

	for (const v of values) {
		if (v % 2 === 0) {
			even++;
		} else {
			odd++;
		}

		if (v > 0) {
			positive++;
		} else if (v < 0) {
			negative++;
		}
	}

	console.log(`${even} valor(es) par(es)`);
	console.log(`${odd} valor(es) impar(es)`);
	console.log(`${positive} valor(es) positivo(s)`);
	console.log(`${negative} valor(es) negativo(s)`);
}

main();
