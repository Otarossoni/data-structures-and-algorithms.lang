// https://judge.beecrowd.com/pt/problems/view/1060
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);
    
    const v1 = Number(lines.shift());
    const v2 = Number(lines.shift());
    const v3 = Number(lines.shift());
    const v4 = Number(lines.shift());
    const v5 = Number(lines.shift());
    const v6 = Number(lines.shift());

	const values = [v1, v2, v3, v4, v5, v6];

	let positiveNumbers = 0;

	for (const v of values) {
		if (v > 0) {
			positiveNumbers++;
		}
	}

	console.log(`${positiveNumbers} valores positivos`);
}

main();
