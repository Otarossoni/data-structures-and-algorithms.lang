// https://judge.beecrowd.com/pt/problems/view/1075
package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	for i := 1; i <= 10000; i++ {
		if i%n == 2 {
			fmt.Println(i)
		}
	}
}
