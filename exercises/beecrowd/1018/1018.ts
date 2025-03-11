// https://judge.beecrowd.com/pt/problems/view/1018
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);
  
	const value = Number(lines.shift());
  
	if (value > 1000000) {
		return;
	}
  
	const result: Record<number, number> = {
		100: 0,
		50: 0,
		20: 0,
		10: 0,
		5: 0,
		2: 0,
		1: 0,
	};
  
	const moneyNoteOrderPriority: number[] = [100, 50, 20, 10, 5, 2, 1];
  
	let i = value;
	while (i > 0) {
		for (const v of moneyNoteOrderPriority) {
			if (i - v >= 0) {
				i -= v;
				result[v]++;
				break;
			}
		}
	}
	
	console.log(value);
	for (const v of moneyNoteOrderPriority) {
		console.log(`${result[v]} nota(s) de R$ ${v},00`);
	}
}

main()
