// https://judge.beecrowd.com/pt/problems/view/1041
package main

import (
	"fmt"
)

func main() {
	var x, y float64

	fmt.Scanf("%f %f", &x, &y)

	if x == 0 && y == 0 {
		fmt.Println("Origem")
	}

	if x == 0 && y != 0 {
		fmt.Println("Eixo Y")
	}

	if x != 0 && y == 0 {
		fmt.Println("Eixo X")
	}

	if x > 0 && y > 0 {
		fmt.Println("Q1")
	}

	if x < 0 && y > 0 {
		fmt.Println("Q2")
	}

	if x < 0 && y < 0 {
		fmt.Println("Q3")
	}

	if x > 0 && y < 0 {
		fmt.Println("Q4")
	}
}
