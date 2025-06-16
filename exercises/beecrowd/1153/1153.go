// https://judge.beecrowd.com/pt/problems/view/1153
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	result := 1
	for i := 2; i <= n; i++ {
		result *= i
	}

	fmt.Println(result)
}
