// https://judge.beecrowd.com/pt/problems/view/1019
import * as fs from "fs";

function main(): void {
    const input = fs.readFileSync("/dev/stdin", "utf8");
    const lines = input.split(/\r?\n/);
    
    const value = Number(lines.shift());
    
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

main()
