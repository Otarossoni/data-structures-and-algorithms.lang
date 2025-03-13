// https://judge.beecrowd.com/pt/problems/view/1021
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const value = Number(lines.shift());

	if (value > 1000000) {
		return;
	}

	let cents = Math.round(value * 100);

	const result: Record<number, number> = {
		10000: 0,
		5000: 0,
		2000: 0,
		1000: 0,
		500: 0,
		200: 0,
		100: 0,
		50: 0,
		25: 0,
		10: 0,
		5: 0,
		1: 0,
	};

	const moneyNoteOrderPriority: number[] = [
		10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1,
	];

	for (const v of moneyNoteOrderPriority) {
		if (cents >= v) {
			result[v] = Math.floor(cents / v);
			cents %= v;
		}
	}

	console.log("NOTAS:");
	for (const v of moneyNoteOrderPriority) {
		if (v > 100) {
			console.log(`${result[v]} nota(s) de R$ ${(v / 100).toFixed(2)}`);
		}
	}

	console.log("MOEDAS:");
	for (const v of moneyNoteOrderPriority) {
		if (v <= 100) {
			console.log(`${result[v]} moeda(s) de R$ ${(v / 100).toFixed(2)}`);
		}
	}
}

main();
