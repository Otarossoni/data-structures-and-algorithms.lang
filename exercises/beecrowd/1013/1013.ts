// https://judge.beecrowd.com/pt/problems/view/1013
import * as fs from 'fs';

function calculateBiggest(x: number, y: number): number {
	return (x + y + Math.abs(x-y)) / 2
}

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);
	
	const line = String(lines.shift()).split(' ');
	
	const a = Number(line[0]);
	const b = Number(line[1]);
	const c = Number(line[2]);
	
	let biggest = calculateBiggest(a, b)
	biggest = calculateBiggest(biggest, c)
	
	console.log(`${biggest} eh o maior`)
}

main()