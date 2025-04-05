// https://judge.beecrowd.com/pt/problems/view/1064
package main

import (
	"fmt"
)

func main() {
	var v1, v2, v3, v4, v5, v6 float64

	fmt.Scanf("%f", &v1)
	fmt.Scanf("%f", &v2)
	fmt.Scanf("%f", &v3)
	fmt.Scanf("%f", &v4)
	fmt.Scanf("%f", &v5)
	fmt.Scanf("%f", &v6)

	values := []float64{v1, v2, v3, v4, v5, v6}
	var sum float64
	var count int

	for _, v := range values {
		if v > 0 {
			sum += v
			count++
		}
	}

	fmt.Printf("%d valores positivos\n", count)
	fmt.Printf("%.1f\n", sum/float64(count))
}
