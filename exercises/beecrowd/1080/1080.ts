// https://judge.beecrowd.com/en/problems/view/1080
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/).map(Number);

	let maxValue = lines[0];
	let position = 1;

	for (let i = 1; i < 100; i++) {
		if (lines[i] > maxValue) {
			maxValue = lines[i];
			position = i + 1;
		}
	}

	console.log(maxValue);
	console.log(position);
}

main();
