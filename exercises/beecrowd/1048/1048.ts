// https://judge.beecrowd.com/pt/problems/view/1048
import * as fs from "fs";

function printSolve(newSalary: number, adjustment: number, percentage: number) {
	console.log(`Novo salario: ${newSalary.toFixed(2)}`)
	console.log(`Reajuste ganho: ${adjustment.toFixed(2)}`)
	console.log(`Em percentual: ${percentage} %`)
}

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const line = String(lines.shift()).split(' ');

	let salary = Number(line[0])

	if (salary > 0 && salary <= 400.00) {
		const adjustment = (salary * 0.15)
		printSolve(salary+adjustment, adjustment, 15)
	} else if (salary > 400.00 && salary <= 800.00) {
		const adjustment = (salary * 0.12)
		printSolve(salary+adjustment, adjustment, 12)
	} else if (salary > 800.00 && salary <= 1200.00) {
		const adjustment = (salary * 0.10)
		printSolve(salary+adjustment, adjustment, 10)
	} else if (salary > 1200.00 && salary <= 2000.00) {
		const adjustment = (salary * 0.07)
		printSolve(salary+adjustment, adjustment, 7)
	} else {
		const adjustment = (salary * 0.04)
		printSolve(salary+adjustment, adjustment, 4)
	}
}

main();
