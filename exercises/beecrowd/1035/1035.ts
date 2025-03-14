// https://judge.beecrowd.com/pt/problems/view/1035
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const a = Number(line[0]);
    const b = Number(line[1]);
    const c = Number(line[2]);
    const d = Number(line[3]);

	if (b > c &&
		d > a &&
		(c+d) > (a+b) &&
		c >= 0 &&
		d >= 0 &&
		a%2 == 0) {
		console.log("Valores aceitos")
	} else {
		console.log("Valores nao aceitos")
	}
}

main();
