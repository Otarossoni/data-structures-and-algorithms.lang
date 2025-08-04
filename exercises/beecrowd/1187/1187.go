// https://judge.beecrowd.com/pt/problems/view/1187
package main

import "fmt"

func main() {
	var operation string
	fmt.Scan(&operation)

	matrix := make([][]float64, 12)
	for i := 0; i < 12; i++ {
		matrix[i] = make([]float64, 12)
		for j := 0; j < 12; j++ {
			fmt.Scan(&matrix[i][j])
		}
	}

	sum := 0.0
	count := 0

	for i := 0; i < 5; i++ {
		for j := i + 1; j < 11-i; j++ {
			sum += matrix[i][j]
			count++
		}
	}

	if operation == "M" {
		sum /= float64(count)
	}

	fmt.Printf("%.1f\n", sum)
}
