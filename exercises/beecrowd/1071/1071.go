// https://judge.beecrowd.com/pt/problems/view/1071
package main

import (
	"fmt"
)

func main() {
	var x, y int

	fmt.Scanln(&x)
	fmt.Scanln(&y)

	min := x
	max := y
	if x > y {
		min = y
		max = x
	}

	sum := 0
	for i := min + 1; i < max; i++ {
		if i%2 != 0 {
			sum += i
		}
	}

	fmt.Println(sum)
}
