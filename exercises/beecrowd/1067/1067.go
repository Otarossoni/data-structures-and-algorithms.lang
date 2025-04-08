// https://judge.beecrowd.com/pt/problems/view/1067
package main

import (
	"fmt"
)

func main() {
	var value int

	fmt.Scanf("%d", &value)

	if value <= 0 && value >= 1001 {
		return
	}

	for i := 1; i <= value; i++ {
		if i%2 != 0 {
			fmt.Println(i)
		}
	}
}
