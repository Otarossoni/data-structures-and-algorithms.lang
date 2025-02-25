// https://judge.beecrowd.com/pt/problems/view/1008
package main

import (
	"fmt"
	"math"
)

func round(number float64, decimalPlaces int) float64 {
	factor := math.Pow(10, float64(decimalPlaces))
	return math.Round(number*factor) / factor
}

func main() {
	var number int
	var hours, valuePerHour float64

	fmt.Scanln(&number)
	fmt.Scanln(&hours)
	fmt.Scanln(&valuePerHour)

	salary := round(hours*valuePerHour, 2)

	fmt.Println("NUMBER =", number)
	fmt.Printf("SALARY = U$ %.2f\n", salary)
}
