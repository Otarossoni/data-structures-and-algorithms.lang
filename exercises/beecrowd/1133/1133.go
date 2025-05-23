// https://judge.beecrowd.com/pt/problems/view/1133
package main

import "fmt"

func main() {
	var x, y int
	fmt.Scan(&x, &y)

	start := x
	end := y
	if x > y {
		start = y
		end = x
	}

	for i := start + 1; i < end; i++ {
		if i%5 == 2 || i%5 == 3 {
			fmt.Println(i)
		}
	}
}
