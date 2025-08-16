// https://judge.beecrowd.com/pt/problems/view/1478
package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	for {
		fmt.Scan(&n)
		if n == 0 {
			break
		}

		matrix := make([][]int, n)
		for i := 0; i < n; i++ {
			matrix[i] = make([]int, n)
			for j := 0; j < n; j++ {
				matrix[i][j] = int(math.Abs(float64(i-j))) + 1
			}
		}

		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				if j > 0 {
					fmt.Printf(" ")
				}
				fmt.Printf("%3d", matrix[i][j])
			}
			fmt.Println()
		}
		fmt.Println()
	}
}
