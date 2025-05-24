// https://judge.beecrowd.com/pt/problems/view/1134
package main

import "fmt"

func main() {
	var code int
	var alcohol, gasoline, diesel int

	for {
		fmt.Scan(&code)

		if code == 1 {
			alcohol++
		} else if code == 2 {
			gasoline++
		} else if code == 3 {
			diesel++
		} else if code == 4 {
			break
		}
	}

	fmt.Println("MUITO OBRIGADO")
	fmt.Printf("Alcool: %d\n", alcohol)
	fmt.Printf("Gasolina: %d\n", gasoline)
	fmt.Printf("Diesel: %d\n", diesel)
}
