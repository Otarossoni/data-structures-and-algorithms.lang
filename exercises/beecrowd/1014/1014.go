// https://judge.beecrowd.com/pt/problems/view/1014
package main

import (
	"fmt"
)

func main() {
	var distance int
	var fuel float64

	fmt.Scanln(&distance)
	fmt.Scanln(&fuel)

	fmt.Printf("%.3f km/l\n", float64(distance)/fuel)
}
