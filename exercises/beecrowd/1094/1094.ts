// https://judge.beecrowd.com/en/problems/view/1094
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.trim().split(/\r?\n/);

	const testCases = parseInt(lines[0]);
	let total = 0;
	let rabbits = 0;
	let rats = 0;
	let frogs = 0;

	for (let i = 1; i <= testCases; i++) {
		const [qtyStr, type] = lines[i].split(' ');
		const quantity = parseInt(qtyStr);
		total += quantity;

		switch (type) {
			case 'C':
				rabbits += quantity;
				break;
			case 'R':
				rats += quantity;
				break;
			case 'S':
				frogs += quantity;
				break;
		}
	}

	console.log(`Total: ${total} cobaias`);
	console.log(`Total de coelhos: ${rabbits}`);
	console.log(`Total de ratos: ${rats}`);
	console.log(`Total de sapos: ${frogs}`);
	console.log(`Percentual de coelhos: ${(rabbits * 100 / total).toFixed(2)} %`);
	console.log(`Percentual de ratos: ${(rats * 100 / total).toFixed(2)} %`);
	console.log(`Percentual de sapos: ${(frogs * 100 / total).toFixed(2)} %`);
}

main();

