// https://judge.beecrowd.com/pt/problems/view/1049
import * as fs from "fs";

function main(): void {
	const input = fs.readFileSync("/dev/stdin", "utf8");
	const lines = input.split(/\r?\n/);

	const category = lines.shift();
    const classType = lines.shift();
    const diet = lines.shift();

	const animalMap: Record<string, Record<string, Record<string, string>>> = {
		vertebrado: {
		  ave: {
			carnivoro: "aguia",
			onivoro: "pomba",
		  },
		  mamifero: {
			onivoro: "homem",
			herbivoro: "vaca",
		  },
		},
		invertebrado: {
		  inseto: {
			hematofago: "pulga",
			herbivoro: "lagarta",
		  },
		  anelideo: {
			hematofago: "sanguessuga",
			onivoro: "minhoca",
		  },
		},
	};
	  
	console.log(animalMap?.[category]?.[classType]?.[diet] || "");
}

main();
