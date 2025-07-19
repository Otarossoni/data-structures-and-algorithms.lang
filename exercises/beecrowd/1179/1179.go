// https://judge.beecrowd.com/pt/problems/view/1179
package main

import "fmt"

func main() {
	var evenNumbers []int
	var oddNumbers []int

	for i := 0; i < 15; i++ {
		var num int
		fmt.Scan(&num)

		if num%2 == 0 {
			evenNumbers = append(evenNumbers, num)
			if len(evenNumbers) == 5 {
				for j := 0; j < 5; j++ {
					fmt.Printf("par[%d] = %d\n", j, evenNumbers[j])
				}
				evenNumbers = nil
			}
		} else {
			oddNumbers = append(oddNumbers, num)
			if len(oddNumbers) == 5 {
				for j := 0; j < 5; j++ {
					fmt.Printf("impar[%d] = %d\n", j, oddNumbers[j])
				}
				oddNumbers = nil
			}
		}
	}

	for i, num := range oddNumbers {
		fmt.Printf("impar[%d] = %d\n", i, num)
	}

	for i, num := range evenNumbers {
		fmt.Printf("par[%d] = %d\n", i, num)
	}
}
