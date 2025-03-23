// https://judge.beecrowd.com.br/judge/pt/problems/view/1045
package main

import (
	"fmt"
	"math"
	"sort"
)

func sortDescending[T int | float64](array []T) []T {
	sort.Slice(array, func(i, j int) bool {
		return array[i] > array[j]
	})

	return array
}

func main() {
	var a, b, c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	ordenedValues := sortDescending([]float64{a, b, c})

	a = ordenedValues[0]
	b = ordenedValues[1]
	c = ordenedValues[2]

	if a >= b+c {
		fmt.Println("NAO FORMA TRIANGULO")
		return
	}

	if math.Pow(a, 2) == math.Pow(b, 2)+math.Pow(c, 2) {
		fmt.Println("TRIANGULO RETANGULO")
	}

	if math.Pow(a, 2) > math.Pow(b, 2)+math.Pow(c, 2) {
		fmt.Println("TRIANGULO OBTUSANGULO")
	}

	if math.Pow(a, 2) < math.Pow(b, 2)+math.Pow(c, 2) {
		fmt.Println("TRIANGULO ACUTANGULO")
	}

	if a == b && b == c && c == a {
		fmt.Println("TRIANGULO EQUILATERO")
	} else if a == b || b == c || c == a {
		fmt.Println("TRIANGULO ISOSCELES")
	}
}
