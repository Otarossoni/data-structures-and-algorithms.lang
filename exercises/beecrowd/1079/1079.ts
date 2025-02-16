// https://judge.beecrowd.com/pt/problems/view/1079
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const n = Number(lines.shift());

	for (let i = 0; i < n; i++) {
		const [a, b, c] = lines[i].split(" ").map(Number);
		const media = (a * 2 + b * 3 + c * 5) / 10;
		console.log(media.toFixed(1));
	}
}

main();
