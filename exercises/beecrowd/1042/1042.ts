// https://judge.beecrowd.com/pt/problems/view/1042
import * as fs from "fs";

function quicksort(array: number[]): number[] {
	if (array.length < 2) {
	  return array
	}
  
	const pivot = array[0]
  
	const less = array.slice(1).filter(item => item <= pivot)
	const greater = array.slice(1).filter(item => item > pivot)
	
	return [...quicksort(less), pivot, ...quicksort(greater)]
}

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	const a = Number(line[0])
	const b = Number(line[1])
	const c = Number(line[2])

	const values: number[] = [a, b, c]
	const sortedValues = quicksort(values)

	for (const v of sortedValues) {
		console.log(v)
	}

	console.log("")

	for (const v of values) {
		console.log(v)
	}
}

main();
