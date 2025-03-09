// https://judge.beecrowd.com/pt/problems/view/1009
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);
    
    const name = String(lines.shift());
    const salary = Number(lines.shift());
    const salesAmount = Number(lines.shift());
    
    const total = salary + (salesAmount * 0.15)
    
    console.log("TOTAL = R$", total.toFixed(2))
}

main()