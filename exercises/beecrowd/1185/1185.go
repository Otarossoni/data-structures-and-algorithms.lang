// https://judge.beecrowd.com/pt/problems/view/1185
package main

import "fmt"

func main() {
	var op string
	fmt.Scan(&op)

	matrix := make([][]float64, 12)
	for i := 0; i < 12; i++ {
		matrix[i] = make([]float64, 12)
		for j := 0; j < 12; j++ {
			fmt.Scan(&matrix[i][j])
		}
	}

	sum := 0.0
	count := 0

	for i := 0; i < 12; i++ {
		for j := 0; j < 12; j++ {
			if i+j < 11 {
				sum += matrix[i][j]
				count++
			}
		}
	}

	if op == "M" {
		sum /= float64(count)
	}

	fmt.Printf("%.1f\n", sum)
}
