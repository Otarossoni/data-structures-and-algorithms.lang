// https://judge.beecrowd.com/pt/problems/view/1041
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const x = Number(line[0])
	const y = Number(line[1])

	if (x == 0 && y == 0) {
		console.log("Origem")
	}

	if (x == 0 && y != 0) {
		console.log("Eixo Y")
	}

	if (x != 0 && y == 0) {
		console.log("Eixo X")
	}

	if (x > 0 && y > 0) {
		console.log("Q1")
	}

	if (x < 0 && y > 0) {
		console.log("Q2")
	}

	if (x < 0 && y < 0) {
		console.log("Q3")
	}

	if (x > 0 && y < 0) {
		console.log("Q4")
	}
}

main();
