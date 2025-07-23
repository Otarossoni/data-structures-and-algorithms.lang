// https://judge.beecrowd.com/pt/problems/view/1181
package main

import "fmt"

func main() {
	var l int
	var op string
	fmt.Scan(&l)
	fmt.Scan(&op)

	matrix := make([][]float64, 12)
	for i := 0; i < 12; i++ {
		matrix[i] = make([]float64, 12)
		for j := 0; j < 12; j++ {
			fmt.Scan(&matrix[i][j])
		}
	}

	sum := 0.0
	for j := 0; j < 12; j++ {
		sum += matrix[l][j]
	}

	if op == "M" {
		sum /= 12.0
	}

	fmt.Printf("%.1f\n", sum)
}
