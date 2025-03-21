// https://judge.beecrowd.com/pt/problems/view/1043
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const a = Number(line[0])
	const b = Number(line[1])
	const c = Number(line[2])

	if (a+b > c && a+c > b && b+c > a) {
		console.log(`Perimetro = ${(a+b+c).toFixed(1)}`)
	} else {
		console.log(`Area = ${(((a+b)*c)/2).toFixed(1)}`)
	}
}

main();
