// https://judge.beecrowd.com/pt/problems/view/1074
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const n = Number(lines.shift());

	for (let i = 0; i < n; i++) {
		const x = Number(lines[i]);

		if (x === 0) {
			console.log("NULL");
		} else {
			let result = "";

			result += (x % 2 === 0) ? "EVEN" : "ODD";
			result += (x > 0) ? " POSITIVE" : " NEGATIVE";

			console.log(result);
		}
	}
}

main();
