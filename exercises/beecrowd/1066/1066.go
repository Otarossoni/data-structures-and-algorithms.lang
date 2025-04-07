// https://judge.beecrowd.com/pt/problems/view/1066
package main

import (
	"fmt"
)

func main() {
	var v1, v2, v3, v4, v5 int

	fmt.Scanf("%d", &v1)
	fmt.Scanf("%d", &v2)
	fmt.Scanf("%d", &v3)
	fmt.Scanf("%d", &v4)
	fmt.Scanf("%d", &v5)

	values := []int{v1, v2, v3, v4, v5}
	var countEven, countOdd, countPositive, countNegative int

	for _, v := range values {
		if v%2 == 0 {
			countEven++
		} else {
			countOdd++
		}

		if v > 0 {
			countPositive++
		} else if v < 0 {
			countNegative++
		}
	}

	fmt.Printf("%d valor(es) par(es)\n", countEven)
	fmt.Printf("%d valor(es) impar(es)\n", countOdd)
	fmt.Printf("%d valor(es) positivo(s)\n", countPositive)
	fmt.Printf("%d valor(es) negativo(s)\n", countNegative)
}
