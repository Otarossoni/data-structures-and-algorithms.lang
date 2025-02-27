// https://judge.beecrowd.com/pt/problems/view/1010
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const line1 = String(lines.shift()).split(' ');
const line2 = String(lines.shift()).split(' ');

const total = (Number(line1[1]) * Number(line1[2])) + (Number(line2[1]) * Number(line2[2]))

console.log("VALOR A PAGAR: R$", total.toFixed(2))