// https://judge.beecrowd.com/pt/problems/view/1005
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
	var a float64
	var b float64

	fmt.Scanln(&a)
	fmt.Scanln(&b)

	result := round((a*3.5+b*7.5)/11, 5)

	fmt.Printf("MEDIA = %.5f\n", result)
}
