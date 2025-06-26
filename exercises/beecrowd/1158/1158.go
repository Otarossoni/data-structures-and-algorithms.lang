// https://judge.beecrowd.com/pt/problems/view/1158
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	for i := 0; i < n; i++ {
		var x, y int
		fmt.Scan(&x, &y)

		if x%2 == 0 {
			x++
		}

		sum := 0
		for j := 0; j < y; j++ {
			sum += x + 2*j
		}

		fmt.Println(sum)
	}
}
