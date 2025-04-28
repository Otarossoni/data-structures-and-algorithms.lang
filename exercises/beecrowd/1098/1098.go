// https://judge.beecrowd.com/en/problems/view/1098
package main

import "fmt"

func main() {
	for i := 0.0; i <= 2.0+0.001; i += 0.2 {
		for j := 1; j <= 3; j++ {
			if i == float64(int(i)) {
				fmt.Printf("I=%d J=%d\n", int(i), int(i)+j)
			} else {
				fmt.Printf("I=%.1f J=%.1f\n", i, i+float64(j))
			}
		}
	}
}
