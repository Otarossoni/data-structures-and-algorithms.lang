// https://judge.beecrowd.com/pt/problems/view/1012
import * as fs from 'fs';

function main(): void {
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const lines = input.split(/\r?\n/);
    
    const PI = 3.14159
    const line = String(lines.shift()).split(' ');
    
    const a = Number(line[0]);
    const b = Number(line[1]);
    const c = Number(line[2]);
    
    console.log(`TRIANGULO: ${(a*c/2).toFixed(3)}`)
    console.log(`CIRCULO: ${(PI*Math.pow(c, 2)).toFixed(3)}`)
    console.log(`TRAPEZIO: ${((a+b)*c/2).toFixed(3)}`)
    console.log(`QUADRADO: ${(Math.pow(b, 2)).toFixed(3)}`)
    console.log(`RETANGULO: ${(a*b).toFixed(3)}`)
}

main()