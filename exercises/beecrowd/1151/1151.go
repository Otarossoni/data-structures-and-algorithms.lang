// https://judge.beecrowd.com/pt/problems/view/1151
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	a, b := 0, 1

	for i := 0; i < n; i++ {
		if i == 0 {
			fmt.Print(a)
		} else {
			fmt.Print(" ", a)
		}
		a, b = b, a+b
	}
	fmt.Println()
}
