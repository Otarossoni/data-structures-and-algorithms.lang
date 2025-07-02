// https://judge.beecrowd.com/pt/problems/view/1164
package main

import (
	"fmt"
	"math"
)

func main() {
	var numTestCases int
	fmt.Scan(&numTestCases)

	for i := 0; i < numTestCases; i++ {
		var num int
		fmt.Scan(&num)

		if num <= 1 {
			fmt.Printf("%d nao eh perfeito\n", num)
			continue
		}

		sumDivisors := 1

		for j := 2; j <= int(math.Sqrt(float64(num))); j++ {
			if num%j == 0 {
				sumDivisors += j
				if j*j != num {
					sumDivisors += num / j
				}
			}
		}

		if sumDivisors == num {
			fmt.Printf("%d eh perfeito\n", num)
		} else {
			fmt.Printf("%d nao eh perfeito\n", num)
		}
	}
}
