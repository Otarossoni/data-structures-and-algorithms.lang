// https://judge.beecrowd.com/pt/problems/view/1061
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync('/dev/stdin', 'utf8');
	const lines = input.split(/\r?\n/);

	const startDay = parseInt(lines[0].split(' ')[1]);
	const [h1, m1, s1] = lines[1].split(' : ').map(Number);
	const endDay = parseInt(lines[2].split(' ')[1]);
	const [h2, m2, s2] = lines[3].split(' : ').map(Number);

	const startSeconds = startDay * 86400 + h1 * 3600 + m1 * 60 + s1;
	const endSeconds = endDay * 86400 + h2 * 3600 + m2 * 60 + s2;

	let duration = endSeconds - startSeconds;

	const days = Math.floor(duration / 86400);
	duration %= 86400;

	const hours = Math.floor(duration / 3600);
	duration %= 3600;

	const minutes = Math.floor(duration / 60);
	const seconds = duration % 60;

	console.log(`${days} dia(s)`);
	console.log(`${hours} hora(s)`);
	console.log(`${minutes} minuto(s)`);
	console.log(`${seconds} segundo(s)`);
}

main();
