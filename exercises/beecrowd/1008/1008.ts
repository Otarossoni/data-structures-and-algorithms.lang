// https://judge.beecrowd.com/pt/problems/view/1008
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);
    
    const number = Number(lines.shift());
    const hours = Number(lines.shift());
    const valuePerHour = Number(lines.shift());
    
    console.log("NUMBER =", number)
    console.log("SALARY = U$", (hours*valuePerHour).toFixed(2))
}

main()