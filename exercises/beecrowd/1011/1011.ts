// https://judge.beecrowd.com/pt/problems/view/1011
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);
    
    const PI = 3.14159
    const r = Number(lines.shift());
    
    const result = ((4.0 / 3.0) * PI * Math.pow(r, 3)).toFixed(3)
    
    console.log(`VOLUME = ${result}`);
}

main()