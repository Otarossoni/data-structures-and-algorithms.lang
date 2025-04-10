// https://judge.beecrowd.com/pt/problems/view/1071
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const x = Number(lines.shift());
	const y = Number(lines.shift());

	const min = Math.min(x, y);
	const max = Math.max(x, y);

	let sum = 0;

	for (let i = min + 1; i < max; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
	}

	console.log(sum);
}

main();
