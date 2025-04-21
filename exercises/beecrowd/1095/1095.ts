// https://judge.beecrowd.com/en/problems/view/1095
function main(): void {
	let i = 1;
	let j = 60;

	while (j >= 0) {
		console.log(`I=${i} J=${j}`);
		i += 3;
		j -= 5;
	}
}

main();
