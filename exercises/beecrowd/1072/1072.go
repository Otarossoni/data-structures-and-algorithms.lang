// https://judge.beecrowd.com/pt/problems/view/1072
package main

import (
	"fmt"
)

func main() {
	var n, x int
	fmt.Scan(&n)

	in, out := 0, 0

	for i := 0; i < n; i++ {
		fmt.Scan(&x)
		if x >= 10 && x <= 20 {
			in++
		} else {
			out++
		}
	}

	fmt.Printf("%d in\n", in)
	fmt.Printf("%d out\n", out)
}
