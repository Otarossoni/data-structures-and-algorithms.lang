// https://judge.beecrowd.com/pt/problems/view/1050
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const ddd = Number(lines.shift());

	const dddMap: Record<number, string> = {
		61: "Brasilia",
		71: "Salvador",
		11: "Sao Paulo",
		21: "Rio de Janeiro",
		32: "Juiz de Fora",
		19: "Campinas",
		27: "Vitoria",
		31: "Belo Horizonte",
	};

	console.log(dddMap[ddd] || "DDD nao cadastrado");
}

main();
