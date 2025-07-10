// https://judge.beecrowd.com/pt/problems/view/1175
package main

import "fmt"

func main() {
	var n [20]int

	for i := 0; i < 20; i++ {
		fmt.Scan(&n[i])
	}

	for i := 0; i < 10; i++ {
		n[i], n[19-i] = n[19-i], n[i]
	}

	for i := 0; i < 20; i++ {
		fmt.Printf("N[%d] = %d\n", i, n[i])
	}
}
