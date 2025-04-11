// https://judge.beecrowd.com/pt/problems/view/1072
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const n = Number(lines.shift());
	let inCount = 0;
	let outCount = 0;

	for (let i = 0; i < n; i++) {
		const x = Number(lines[i]);
		if (x >= 10 && x <= 20) {
			inCount++;
		} else {
			outCount++;
		}
	}

	console.log(`${inCount} in`);
	console.log(`${outCount} out`);
}

main();
