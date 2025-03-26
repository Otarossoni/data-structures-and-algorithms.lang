// https://judge.beecrowd.com/pt/problems/view/1047
import * as fs from "fs";

function calculatePeriod(beginning: number, end: number, limit: number): number {
	let duration = end - beginning
	if (duration < 0) {
		duration += limit
	}
	return duration
}

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	let a = Number(line[0])
	let b = Number(line[1])
	let c = Number(line[2])
	let d = Number(line[3])

	let hours = calculatePeriod(a, c, 24)
	let minutes = calculatePeriod(b, d, 60)

	if (a == c && b == d) {
		hours = 24
		minutes = 0
	} else if (b > d) {
		hours = (hours + 23) % 24
	}

	console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`)
}

main();
