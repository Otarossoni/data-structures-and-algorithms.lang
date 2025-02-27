// https://judge.beecrowd.com/pt/problems/view/1010
package main

import "fmt"

func main() {
	var id1, id2, quantity1, quantity2 int
	var value1, value2 float64

	fmt.Scanf("%d %d %f ", &id1, &quantity1, &value1)
	fmt.Scanf("%d %d %f", &id2, &quantity2, &value2)

	total := (float64(quantity1) * value1) + (float64(quantity2) * value2)

	fmt.Printf("VALOR A PAGAR: R$ %.2f\n", total)
}
