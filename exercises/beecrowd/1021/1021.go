// https://judge.beecrowd.com/pt/problems/view/1021
package main

import (
	"fmt"
)

func main() {
	var value float64
	fmt.Scanln(&value)

	if value > 1000000.00 {
		return
	}

	cents := int(value * 100)

	result := map[int]int{
		10000: 0,
		5000:  0,
		2000:  0,
		1000:  0,
		500:   0,
		200:   0,
		100:   0,
		50:    0,
		25:    0,
		10:    0,
		5:     0,
		1:     0,
	}

	moneyNoteOrderPriority := []int{10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1}

	for _, v := range moneyNoteOrderPriority {
		if cents >= v {
			result[v] = cents / v
			cents = cents % v
		}
	}

	fmt.Println("NOTAS:")
	for _, v := range moneyNoteOrderPriority {
		if v > 100 {
			fmt.Printf("%d nota(s) de R$ %.2f\n", result[v], float64(v)/100)
		}
	}

	fmt.Println("MOEDAS:")
	for _, v := range moneyNoteOrderPriority {
		if v <= 100 {
			fmt.Printf("%d moeda(s) de R$ %.2f\n", result[v], float64(v)/100)
		}
	}
}
