// https://judge.beecrowd.com/pt/problems/view/1132
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

	sum := 0
	for i := start; i <= end; i++ {
		if i%13 != 0 {
			sum += i
		}
	}

	fmt.Println(sum)
}
