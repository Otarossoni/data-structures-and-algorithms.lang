// https://judge.beecrowd.com/pt/problems/view/1115
package main

import "fmt"

func main() {
	var x, y int
	for {
		fmt.Scan(&x, &y)
		if x == 0 || y == 0 {
			break
		}

		if x > 0 && y > 0 {
			fmt.Println("primeiro")
		} else if x < 0 && y > 0 {
			fmt.Println("segundo")
		} else if x < 0 && y < 0 {
			fmt.Println("terceiro")
		} else if x > 0 && y < 0 {
			fmt.Println("quarto")
		}
	}
}
