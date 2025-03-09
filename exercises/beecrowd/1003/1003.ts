// https://judge.beecrowd.com/pt/problems/view/1003
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);

    const a = Number(lines.shift());
    const b = Number(lines.shift());

    console.log(`SOMA = ${a + b}`);
}

main()