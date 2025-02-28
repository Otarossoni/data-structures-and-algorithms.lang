// https://judge.beecrowd.com/pt/problems/view/1011
package main

import (
	"fmt"
	"math"
)

func main() {
	const PI float64 = 3.14159
	var r float64

	fmt.Scanln(&r)

	total := (4.0 / 3.0) * PI * math.Pow(r, 3)

	fmt.Printf("VOLUME = %.3f\n", total)
}
