// https://judge.beecrowd.com/pt/problems/view/1070
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const value = Number(lines.shift());

	let qtdResults = 0

	for (let i = value; qtdResults < 6; i++) {
		if (i%2 != 0) {
			qtdResults++
			console.log(i)
		}
	}
}

main();
