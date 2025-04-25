// https://judge.beecrowd.com/en/problems/view/1097
package main

import "fmt"

func main() {
	for i := 1; i <= 9; i += 2 {
		j := i + 6
		for k := 0; k < 3; k++ {
			fmt.Printf("I=%d J=%d\n", i, j-k)
		}
	}
}
