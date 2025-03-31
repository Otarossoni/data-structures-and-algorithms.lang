// https://judge.beecrowd.com/pt/problems/view/1052
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const monthNumber = Number(lines.shift());

	const monthMap: Record<number, string> = {
		1:  "January",
		2:  "February",
		3:  "March",
		4:  "April",
		5:  "May",
		6:  "June",
		7:  "July",
		8:  "August",
		9:  "September",
		10: "October",
		11: "November",
		12: "December",
	};

	console.log(monthMap[monthNumber]);
}

main();
