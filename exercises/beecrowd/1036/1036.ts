// https://judge.beecrowd.com/pt/problems/view/1036
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const a = Number(line[0]);
    const b = Number(line[1]);
    const c = Number(line[2]);

	const delta = Math.pow(b, 2) - 4*a*c

	if (delta <= 0 || a == 0) {
		console.log("Impossivel calcular")
		return
	}

	console.log(`R1 = ${((-b+Math.sqrt(delta))/(2*a)).toFixed(5)}`)
	console.log(`R2 = ${((-b-Math.sqrt(delta))/(2*a)).toFixed(5)}`)
}

main();
