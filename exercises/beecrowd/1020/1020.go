// https://judge.beecrowd.com/pt/problems/view/1020
package main

import (
	"fmt"
)

func main() {
	var value int

	fmt.Scanln(&value)

	result := map[int]int{
		365: 0,
		30:  0,
		1:   0,
	}

	periodsOrderPriority := []int{365, 30, 1}

	i := value
	for i > 0 {
		for _, v := range periodsOrderPriority {
			if (i - v) >= 0 {
				i = i - v
				result[v]++
				break
			}
		}
	}

	fmt.Printf("%v ano(s)\n", result[365])
	fmt.Printf("%v mes(es)\n", result[30])
	fmt.Printf("%v dia(s)\n", result[1])
}
