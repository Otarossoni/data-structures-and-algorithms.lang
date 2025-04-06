// https://judge.beecrowd.com/pt/problems/view/1065
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
	var count int

	for _, v := range values {
		if v%2 == 0 {
			count++
		}
	}

	fmt.Printf("%d valores pares\n", count)
}
