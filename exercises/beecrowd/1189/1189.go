// https://judge.beecrowd.com/pt/problems/view/1189
package main

import (
	"fmt"
	"math"
)

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

	for i := 1; i < 11; i++ {
		limit := int(math.Min(float64(i), float64(11-i)))

		for j := 0; j < limit; j++ {
			sum += matrix[i][j]
			count++
		}
	}

	if operation == "M" {
		sum /= float64(count)
	}

	fmt.Printf("%.1f\n", sum)
}
