// https://judge.beecrowd.com/pt/problems/view/1020
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);
  
	const value = Number(lines.shift());
  
	const result: Record<number, number> = {
        365: 0,
		30:  0,
		1:   0,
	};
  
	const moneyNoteOrderPriority: number[] = [365, 30, 1];
  
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
	
    console.log(`${result[365]} ano(s)`)
	console.log(`${result[30]} mes(es)`)
	console.log(`${result[1]} dia(s)`)
}

main()
