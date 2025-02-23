// https://judge.beecrowd.com/pt/problems/view/1006
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
	var c float64

	fmt.Scanln(&a)
	fmt.Scanln(&b)
	fmt.Scanln(&c)

	result := round((a*2+b*3+c*5)/10, 1)

	fmt.Printf("MEDIA = %.1f\n", result)
}
