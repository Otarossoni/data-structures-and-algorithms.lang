// https://judge.beecrowd.com/pt/problems/view/1146
package main

import (
	"fmt"
)

func main() {
	var x int

	for {
		fmt.Scan(&x)
		if x == 0 {
			break
		}

		for i := 1; i <= x; i++ {
			if i == x {
				fmt.Printf("%d\n", i)
			} else {
				fmt.Printf("%d ", i)
			}
		}
	}
}
