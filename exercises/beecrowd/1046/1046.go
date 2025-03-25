// https://judge.beecrowd.com.br/judge/pt/problems/view/1046
package main

import (
	"fmt"
)

func calculatePeriod(beginning, end, collapse int) int {
	duration := (collapse - beginning) + end

	if duration > collapse {
		duration = duration - collapse
	}

	return duration
}

func main() {
	var a, b int

	fmt.Scanf("%d %d", &a, &b)

	fmt.Printf("O JOGO DUROU %d HORA(S)\n", calculatePeriod(a, b, 24))
}
