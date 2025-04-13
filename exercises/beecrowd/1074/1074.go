// https://judge.beecrowd.com/pt/problems/view/1074
package main

import (
	"fmt"
)

func main() {
	var n, x int
	fmt.Scan(&n)

	for i := 0; i < n; i++ {
		fmt.Scan(&x)

		if x == 0 {
			fmt.Println("NULL")
		} else {
			if x%2 == 0 {
				fmt.Print("EVEN ")
			} else {
				fmt.Print("ODD ")
			}

			if x > 0 {
				fmt.Println("POSITIVE")
			} else {
				fmt.Println("NEGATIVE")
			}
		}
	}
}
