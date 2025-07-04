// https://judge.beecrowd.com/pt/problems/view/1165
package main

import (
	"fmt"
)

func main() {
	var x int
	fmt.Scan(&x)

	for i := 0; i < x; i++ {
		var num int
		fmt.Scan(&num)

		isPrime := true
		if num <= 1 {
			isPrime = false
		} else {
			for j := 2; j*j <= num; j++ {
				if num%j == 0 {
					isPrime = false
					break
				}
			}
		}

		if isPrime {
			fmt.Printf("%d eh primo\n", num)
		} else {
			fmt.Printf("%d nao eh primo\n", num)
		}
	}
}
