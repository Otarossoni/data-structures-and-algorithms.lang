// https://judge.beecrowd.com.br/judge/pt/problems/view/1047
package main

import (
	"fmt"
)

func calculatePeriod(beginning, end, limit int) int {
	duration := end - beginning
	if duration < 0 {
		duration += limit
	}
	return duration
}

func main() {
	var a, b, c, d int

	fmt.Scanf("%d %d %d %d", &a, &b, &c, &d)

	hours := calculatePeriod(a, c, 24)
	minutes := calculatePeriod(b, d, 60)

	if a == c && b == d {
		hours = 24
		minutes = 0
	} else if b > d {
		hours = (hours + 23) % 24
	}

	fmt.Printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", hours, minutes)
}
