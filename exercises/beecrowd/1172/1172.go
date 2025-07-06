// https://judge.beecrowd.com/pt/problems/view/1172
package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		var v int
		fmt.Scan(&v)

		if v <= 0 {
			v = 1
		}

		fmt.Printf("X[%d] = %d\n", i, v)
	}
}
