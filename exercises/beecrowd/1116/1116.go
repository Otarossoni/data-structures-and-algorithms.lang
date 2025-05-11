// https://judge.beecrowd.com/pt/problems/view/1116
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	for i := 0; i < n; i++ {
		var x, y int
		fmt.Scan(&x, &y)

		if y == 0 {
			fmt.Println("divisao impossivel")
		} else {
			fmt.Printf("%.1f\n", float64(x)/float64(y))
		}
	}
}
