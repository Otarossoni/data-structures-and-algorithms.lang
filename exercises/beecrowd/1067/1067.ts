// https://judge.beecrowd.com/pt/problems/view/1067
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const value = Number(lines.shift());

	if (value <= 0 && value >= 1001) {
		return
	}

	for (let i = 1; i <= value; i++) {
		if (i%2 != 0){
			console.log(i)
		}
	}
}

main();
