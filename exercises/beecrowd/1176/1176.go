// https://judge.beecrowd.com/pt/problems/view/1176
package main

import "fmt"

func main() {
	var t, n int
	fmt.Scan(&t)

	var fib [61]uint64
	fib[0], fib[1] = 0, 1
	for i := 2; i <= 60; i++ {
		fib[i] = fib[i-1] + fib[i-2]
	}

	for i := 0; i < t; i++ {
		fmt.Scan(&n)
		fmt.Printf("Fib(%d) = %d\n", n, fib[n])
	}
}
