// https://judge.beecrowd.com/pt/problems/view/1044
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const a = Number(line[0])
	const b = Number(line[1])

	if (a%b == 0 || b%a == 0) {
		console.log("Sao Multiplos")
	} else {
		console.log("Nao sao Multiplos")
	}
}

main();
