// https://judge.beecrowd.com/pt/problems/view/1018
package main

import (
	"fmt"
)

func main() {
	var value int

	fmt.Scanln(&value)

	if value > 1000000 {
		return
	}

	result := map[int]int{
		100: 0,
		50:  0,
		20:  0,
		10:  0,
		5:   0,
		2:   0,
		1:   0,
	}

	moneyNoteOrderPriority := []int{100, 50, 20, 10, 5, 2, 1}

	i := value
	for i > 0 {
		for _, v := range moneyNoteOrderPriority {
			if (i - v) >= 0 {
				i = i - v
				result[v]++
				break
			}
		}
	}

	fmt.Println(value)
	for _, v := range moneyNoteOrderPriority {
		fmt.Printf("%v nota(s) de R$ %v,00\n", result[v], v)
	}
}
