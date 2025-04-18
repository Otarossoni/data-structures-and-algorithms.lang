// https://judge.beecrowd.com/en/problems/view/1080
package main

import (
	"fmt"
)

func main() {
	var maxValue, position, current int

	for i := 1; i <= 100; i++ {
		fmt.Scan(&current)
		if i == 1 || current > maxValue {
			maxValue = current
			position = i
		}
	}

	fmt.Println(maxValue)
	fmt.Println(position)
}
