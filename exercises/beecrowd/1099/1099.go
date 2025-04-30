// https://judge.beecrowd.com/en/problems/view/1099
package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	for i := 0; i < n; i++ {
		var x, y int
		fmt.Scan(&x, &y)

		if x > y {
			x, y = y, x
		}

		sum := 0
		for j := x + 1; j < y; j++ {
			if j%2 != 0 {
				sum += j
			}
		}
		fmt.Println(sum)
	}
}
