// https://judge.beecrowd.com/pt/problems/view/1013
package main

import (
	"fmt"
	"math"
)

func calculateBiggest(x, y int) int {
	return (x + y + int(math.Abs(float64(x)-float64(y)))) / 2
}

func main() {
	var a, b, c int

	fmt.Scanf("%v %v %v", &a, &b, &c)

	biggest := calculateBiggest(a, b)
	biggest = calculateBiggest(biggest, c)

	fmt.Printf("%v eh o maior\n", biggest)
}
