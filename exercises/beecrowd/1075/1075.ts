// https://judge.beecrowd.com/pt/problems/view/1075
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const n = Number(lines.shift());

	for (let i = 1; i <= 10000; i++) {
		if (i % n === 2) {
			console.log(i);
		}
	}
}

main();

