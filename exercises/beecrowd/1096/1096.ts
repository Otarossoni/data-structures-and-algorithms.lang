// https://judge.beecrowd.com/en/problems/view/1096
function main(): void {
	for (let i = 1; i <= 9; i += 2) {
		for (let j = 7; j >= 5; j--) {
			console.log(`I=${i} J=${j}`);
		}
	}
}

main();
