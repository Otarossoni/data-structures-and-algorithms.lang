// https://judge.beecrowd.com/pt/problems/view/1002
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);

    const PI = 3.14159
    const raio = Number(lines.shift());

    const result = (Math.round((PI*(raio*raio))*10000) / 10000).toFixed(4)

    console.log(`A=${result}`);
}

main()