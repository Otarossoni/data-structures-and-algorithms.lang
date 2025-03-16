// https://judge.beecrowd.com/pt/problems/view/1038
package main

import (
	"fmt"
)

func main() {
	var item, quantity int

	fmt.Scanf("%v %v", &item, &quantity)

	itemsTable := map[int]float64{
		1: 4.00,
		2: 4.50,
		3: 5.00,
		4: 2.00,
		5: 1.50,
	}

	fmt.Printf("Total: R$ %.2f\n", itemsTable[item]*float64(quantity))
}
