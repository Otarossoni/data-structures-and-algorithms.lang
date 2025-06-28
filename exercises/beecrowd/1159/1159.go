// https://judge.beecrowd.com/pt/problems/view/1159
package main

import "fmt"

func main() {
	var x int

	for {
		fmt.Scan(&x)
		if x == 0 {
			break
		}

		if x%2 != 0 {
			x++
		}

		sum := 0
		for i := 0; i < 5; i++ {
			sum += x
			x += 2
		}

		fmt.Println(sum)
	}
}
