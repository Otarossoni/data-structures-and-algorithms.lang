// https://judge.beecrowd.com/en/problems/view/1096
package main

import "fmt"

func main() {
	for i := 1; i <= 9; i += 2 {
		for j := 7; j >= 5; j-- {
			fmt.Printf("I=%d J=%d\n", i, j)
		}
	}
}
