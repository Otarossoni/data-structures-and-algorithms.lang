// https://judge.beecrowd.com/en/problems/view/1094
package main

import (
	"fmt"
)

func main() {
	var testCases int
	fmt.Scan(&testCases)

	var total, rabbits, rats, frogs int

	for i := 0; i < testCases; i++ {
		var quantity int
		var animalType string
		fmt.Scan(&quantity, &animalType)

		total += quantity

		switch animalType {
		case "C":
			rabbits += quantity
		case "R":
			rats += quantity
		case "S":
			frogs += quantity
		}
	}

	fmt.Printf("Total: %d cobaias\n", total)
	fmt.Printf("Total de coelhos: %d\n", rabbits)
	fmt.Printf("Total de ratos: %d\n", rats)
	fmt.Printf("Total de sapos: %d\n", frogs)
	fmt.Printf("Percentual de coelhos: %.2f %%\n", float64(rabbits)*100/float64(total))
	fmt.Printf("Percentual de ratos: %.2f %%\n", float64(rats)*100/float64(total))
	fmt.Printf("Percentual de sapos: %.2f %%\n", float64(frogs)*100/float64(total))
}
