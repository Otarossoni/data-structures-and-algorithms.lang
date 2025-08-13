// https://judge.beecrowd.com/pt/problems/view/1435
package main

import (
	"fmt"
)

func minOfFour(a, b, c, d int) int {
	minVal := a
	if b < minVal {
		minVal = b
	}
	if c < minVal {
		minVal = c
	}
	if d < minVal {
		minVal = d
	}
	return minVal
}

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
				matrix[i][j] = minOfFour(i, n-1-i, j, n-1-j) + 1
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
