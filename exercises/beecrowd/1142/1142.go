// https://judge.beecrowd.com/pt/problems/view/1142
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	count := 1

	for i := 0; i < n; i++ {
		fmt.Printf("%d %d %d PUM\n", count, count+1, count+2)
		count += 4
	}
}
