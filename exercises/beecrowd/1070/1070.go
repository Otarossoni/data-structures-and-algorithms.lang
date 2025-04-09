// https://judge.beecrowd.com/pt/problems/view/1070
package main

import (
	"fmt"
)

func main() {
	var value int

	fmt.Scanf("%d", &value)

	qtdResults := 0

	for i := value; qtdResults < 6; i++ {
		if i%2 != 0 {
			qtdResults++
			fmt.Println(i)
		}
	}
}
