// https://judge.beecrowd.com/pt/problems/view/1149
package main

import "fmt"

func main() {
	var a, n int
	fmt.Scan(&a)

	for {
		fmt.Scan(&n)
		if n > 0 {
			break
		}
	}

	sum := 0
	for i := 0; i < n; i++ {
		sum += a + i
	}

	fmt.Println(sum)
}
