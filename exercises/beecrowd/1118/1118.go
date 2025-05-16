// https://judge.beecrowd.com/pt/problems/view/1118
package main

import "fmt"

func main() {
	var option int

	for {
		validCount := 0
		var grade, sum float64

		for validCount < 2 {
			fmt.Scan(&grade)
			if grade >= 0 && grade <= 10 {
				sum += grade
				validCount++
			} else {
				fmt.Println("nota invalida")
			}
		}

		average := sum / 2.0
		fmt.Printf("media = %.2f\n", average)

		for {
			fmt.Println("novo calculo (1-sim 2-nao)")
			fmt.Scan(&option)
			if option == 1 || option == 2 {
				break
			}
		}

		if option == 2 {
			break
		}
	}
}
