// https://judge.beecrowd.com/pt/problems/view/1117
package main

import (
	"fmt"
)

func main() {
	var grade float64
	validCount := 0
	var sum float64

	for validCount < 2 {
		fmt.Scan(&grade)
		if grade < 0.0 || grade > 10.0 {
			fmt.Println("nota invalida")
		} else {
			sum += grade
			validCount++
		}
	}

	average := sum / 2.0
	fmt.Printf("media = %.2f\n", average)
}
