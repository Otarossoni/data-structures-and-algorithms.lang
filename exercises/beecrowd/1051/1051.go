// https://judge.beecrowd.com/pt/problems/view/1051
package main

import (
	"fmt"
)

func main() {
	var salary float64

	fmt.Scanln(&salary)

	tax := 0.0

	if salary > 4500.00 {
		tax += (salary - 4500.00) * 0.28
		salary = 4500.00
	}

	if salary > 3000.00 {
		tax += (salary - 3000.00) * 0.18
		salary = 3000.00
	}

	if salary > 2000.00 {
		tax += (salary - 2000.00) * 0.08
	}

	if tax == 0 {
		fmt.Println("Isento")
	} else {
		fmt.Printf("R$ %.2f\n", tax)
	}
}
