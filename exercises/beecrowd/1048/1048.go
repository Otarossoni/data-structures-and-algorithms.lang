// https://judge.beecrowd.com/pt/problems/view/1048
package main

import (
	"fmt"
)

func printSolve(newSalary, adjustment float64, percentage int) {
	fmt.Printf("Novo salario: %.2f\n", newSalary)
	fmt.Printf("Reajuste ganho: %.2f\n", adjustment)
	fmt.Printf("Em percentual: %d %%\n", percentage)
}

func main() {
	var salary float64

	fmt.Scanf("%f", &salary)

	if salary > 0 && salary <= 400.00 {
		adjustment := (salary * 0.15)
		printSolve(salary+adjustment, adjustment, 15)
	} else if salary > 400.00 && salary <= 800.00 {
		adjustment := (salary * 0.12)
		printSolve(salary+adjustment, adjustment, 12)
	} else if salary > 800.00 && salary <= 1200.00 {
		adjustment := (salary * 0.10)
		printSolve(salary+adjustment, adjustment, 10)
	} else if salary > 1200.00 && salary <= 2000.00 {
		adjustment := (salary * 0.07)
		printSolve(salary+adjustment, adjustment, 7)
	} else {
		adjustment := (salary * 0.04)
		printSolve(salary+adjustment, adjustment, 4)
	}
}
