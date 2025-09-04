// https://judge.beecrowd.com/pt/problems/view/1534
package main

import (
	"fmt"
)

func main() {
	var n int
	for {
		_, err := fmt.Scan(&n)
		if err != nil {
			break
		}

		matrix := make([][]int, n)
		for i := 0; i < n; i++ {
			matrix[i] = make([]int, n)
			for j := 0; j < n; j++ {
				if i+j == n-1 {
					matrix[i][j] = 2
				} else if i == j {
					matrix[i][j] = 1
				} else {
					matrix[i][j] = 3
				}
			}
		}

		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				fmt.Printf("%d", matrix[i][j])
			}
			fmt.Println()
		}
	}
}
