// https://judge.beecrowd.com/pt/problems/view/1177
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	t := make([]int, 1000)

	for i := 0; i < 1000; i++ {
		t[i] = i % n
		fmt.Printf("N[%d] = %d\n", i, t[i])
	}
}
