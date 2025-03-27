// https://judge.beecrowd.com/pt/problems/view/1043
package main

import (
	"fmt"
)

func main() {
	var a, b, c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	if a+b > c && a+c > b && b+c > a {
		fmt.Printf("Perimetro = %.1f\n", a+b+c)
	} else {
		fmt.Printf("Area = %.1f\n", ((a+b)*c)/2)
	}
}
