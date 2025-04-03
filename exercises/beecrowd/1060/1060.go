// https://judge.beecrowd.com/pt/problems/view/1060
package main

import (
	"fmt"
)

func main() {
	var v1, v2, v3, v4, v5, v6 float64

	fmt.Scanln(&v1)
	fmt.Scanln(&v2)
	fmt.Scanln(&v3)
	fmt.Scanln(&v4)
	fmt.Scanln(&v5)
	fmt.Scanln(&v6)

	values := []float64{v1, v2, v3, v4, v5, v6}

	var positiveNumbers int

	for _, v := range values {
		if v > 0 {
			positiveNumbers++
		}
	}

	fmt.Printf("%v valores positivos\n", positiveNumbers)
}
