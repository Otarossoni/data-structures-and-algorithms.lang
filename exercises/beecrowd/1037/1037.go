// https://judge.beecrowd.com/pt/problems/view/1037
package main

import (
	"fmt"
)

func main() {
	var value float64

	fmt.Scanf("%f", &value)

	if value >= 0 && value <= 25 {
		fmt.Println("Intervalo [0,25]")
	} else if value > 25 && value <= 50 {
		fmt.Println("Intervalo (25,50]")
	} else if value > 50 && value <= 75 {
		fmt.Println("Intervalo (50,75]")
	} else if value > 75 && value <= 100 {
		fmt.Println("Intervalo (75,100]")
	} else {
		fmt.Println("Fora de intervalo")
	}
}
