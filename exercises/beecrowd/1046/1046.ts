// https://judge.beecrowd.com/pt/problems/view/1046
import * as fs from "fs";

function calculatePeriod(beginning: number, end: number, collapse: number): number {
	let duration = (collapse - beginning) + end

	if (duration > collapse) {
		duration = duration - collapse
	}

	return duration
}

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	let a = Number(line[0])
	let b = Number(line[1])

	console.log(`O JOGO DUROU ${calculatePeriod(a, b, 24)} HORA(S)`)
}

main();
