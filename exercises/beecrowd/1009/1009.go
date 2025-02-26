// https://judge.beecrowd.com/pt/problems/view/1009
package main

import "fmt"

func main() {
	var name string
	var salary, salesAmount float64

	fmt.Scanln(&name)
	fmt.Scanln(&salary)
	fmt.Scanln(&salesAmount)

	total := salary + (salesAmount * 0.15)

	fmt.Printf("TOTAL = R$ %.2f\n", total)
}
