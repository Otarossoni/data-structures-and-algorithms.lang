// https://judge.beecrowd.com/pt/problems/view/1051
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	let salary = Number(lines.shift());

	let tax = 0.0

	if (salary > 4500.00) {
		tax += (salary - 4500.00) * 0.28
		salary = 4500.00
	}

	if (salary > 3000.00) {
		tax += (salary - 3000.00) * 0.18
		salary = 3000.00
	}

	if (salary > 2000.00) {
		tax += (salary - 2000.00) * 0.08
	}

	if (tax == 0) {
		console.log("Isento")
	} else {
		console.log(`R$ ${tax.toFixed(2)}`)
	}
}

main();
