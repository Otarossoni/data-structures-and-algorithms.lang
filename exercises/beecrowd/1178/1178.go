// https://judge.beecrowd.com/pt/problems/view/1178
package main

import "fmt"

func main() {
	var n float64
	fmt.Scan(&n)

	x := make([]float64, 100)

	x[0] = n

	for i := 1; i < 100; i++ {
		x[i] = x[i-1] / 2.0
	}

	for i := 0; i < 100; i++ {
		fmt.Printf("N[%d] = %.4f\n", i, x[i])
	}
}
