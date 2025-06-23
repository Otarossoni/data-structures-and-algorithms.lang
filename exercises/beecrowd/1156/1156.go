// https://judge.beecrowd.com/pt/problems/view/1156
package main

import (
	"fmt"
)

func main() {
	S := 0.0
	numerator := 1.0
	denominator := 1.0

	for i := 0; i < 20; i++ {
		S += numerator / denominator
		numerator += 2
		denominator *= 2
	}

	fmt.Printf("%.2f\n", S)
}
