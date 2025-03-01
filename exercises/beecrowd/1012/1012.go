// https://judge.beecrowd.com/pt/problems/view/1012
package main

import (
	"fmt"
	"math"
)

func main() {
	const PI float64 = 3.14159
	var a, b, c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	fmt.Printf("TRIANGULO: %.3f\n", a*c/2)
	fmt.Printf("CIRCULO: %.3f\n", PI*math.Pow(c, 2))
	fmt.Printf("TRAPEZIO: %.3f\n", (a+b)*c/2)
	fmt.Printf("QUADRADO: %.3f\n", math.Pow(b, 2))
	fmt.Printf("RETANGULO: %.3f\n", a*b)
}
