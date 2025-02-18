package main

import (
	"fmt"
	"math"
)

func main() {
	var raio float64
	pi := 3.14159

	fmt.Scanln(&raio)

	result := math.Round((pi*(raio*raio))*10000) / 10000

	fmt.Printf("A=%.4f\n", result)
}
