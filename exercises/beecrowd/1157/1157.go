// https://judge.beecrowd.com/pt/problems/view/1157
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	for i := 1; i <= n; i++ {
		if n%i == 0 {
			fmt.Println(i)
		}
	}
}
