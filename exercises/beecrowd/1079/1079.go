// https://judge.beecrowd.com/pt/problems/view/1078
package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	for i := 0; i < n; i++ {
		var a, b, c float64
		fmt.Scan(&a, &b, &c)

		media := (a*2 + b*3 + c*5) / 10
		fmt.Printf("%.1f\n", media)
	}
}
