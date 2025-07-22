// https://judge.beecrowd.com/pt/problems/view/1180
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	valores := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&valores[i])
	}

	menor := valores[0]
	pos := 0
	for i := 1; i < n; i++ {
		if valores[i] < menor {
			menor = valores[i]
			pos = i
		}
	}

	fmt.Printf("Menor valor: %d\n", menor)
	fmt.Printf("Posicao: %d\n", pos)
}
