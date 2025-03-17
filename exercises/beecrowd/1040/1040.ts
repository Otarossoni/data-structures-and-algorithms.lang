// https://judge.beecrowd.com/pt/problems/view/1040
import * as fs from "fs";

function main(): void {
    const input = fs.readFileSync("/dev/stdin", "utf8");
    const lines = input.split(/\r?\n/);

    const line = String(lines.shift()).split(' ');

    const n1 = Number(line[0]);
    const n2 = Number(line[1]);
    const n3 = Number(line[2]);
    const n4 = Number(line[3]);

    const w1 = 2.0;
    const w2 = 3.0;
    const w3 = 4.0;
    const w4 = 1.0;

    const average = ((n1 * w1) + (n2 * w2) + (n3 * w3) + (n4 * w4)) / (w1 + w2 + w3 + w4);

    console.log(`Media: ${average.toFixed(1)}`);

    if (average >= 7.0) {
        console.log("Aluno aprovado.");
    } else if (average < 5.0) {
        console.log("Aluno reprovado.");
    } else {
        console.log("Aluno em exame.");
        
        const n5 = Number(lines.shift());
        console.log(`Nota do exame: ${n5.toFixed(1)}`);

        const examAverage = (average + n5) / 2;

        if (examAverage >= 5.0) {
            console.log("Aluno aprovado.");
        } else {
            console.log("Aluno reprovado.");
        }

        console.log(`Media final: ${examAverage.toFixed(1)}`);
    }
}

main();
