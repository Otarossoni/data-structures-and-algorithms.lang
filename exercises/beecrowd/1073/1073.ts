// https://judge.beecrowd.com/pt/problems/view/1073
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const n = Number(lines.shift());

	for (let i = 2; i <= n; i += 2) {
		console.log(`${i}^2 = ${i * i}`);
	}
}

main();

