// https://judge.beecrowd.com/pt/problems/view/1045
import * as fs from "fs";

function sortDescending<T extends number>(array: T[]): T[] {
    return array.sort((a, b) => b - a);
}

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	let a = Number(line[0])
	let b = Number(line[1])
	let c = Number(line[2])

	const ordenedValues = sortDescending([a, b, c])

	a = ordenedValues[0]
	b = ordenedValues[1]
	c = ordenedValues[2]

	if (a >= b+c) {
		console.log("NAO FORMA TRIANGULO")
		return
	}

	if (Math.pow(a, 2) == Math.pow(b, 2)+Math.pow(c, 2)) {
		console.log("TRIANGULO RETANGULO")
	}

	if (Math.pow(a, 2) > Math.pow(b, 2)+Math.pow(c, 2)) {
		console.log("TRIANGULO OBTUSANGULO")
	}

	if (Math.pow(a, 2) < Math.pow(b, 2)+Math.pow(c, 2)) {
		console.log("TRIANGULO ACUTANGULO")
	}

	if (a == b && b == c && c == a) {
		console.log("TRIANGULO EQUILATERO")
	} else if (a == b || b == c || c == a) {
		console.log("TRIANGULO ISOSCELES")
	}
}

main();
