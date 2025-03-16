// https://judge.beecrowd.com/pt/problems/view/1038
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const item = Number(line[0])
	const quantity = Number(line[1])

	const itemsTable: Record<number, number> = {
		1: 4.00,
		2: 4.50,
		3: 5.00,
		4: 2.00,
		5: 1.50,
	};

	console.log(`Total: R$ ${(itemsTable[item]*quantity).toFixed(2)}`)
}

main();
