// https://judge.beecrowd.com/pt/problems/view/1174
package main

import "fmt"

func main() {
	var a float64

	for i := 0; i < 100; i++ {
		fmt.Scan(&a)
		if a <= 10.0 {
			fmt.Printf("A[%d] = %.1f\n", i, a)
		}
	}
}
