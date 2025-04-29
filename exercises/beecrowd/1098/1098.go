// https://judge.beecrowd.com/en/problems/view/1098
package main

import "fmt"

func format(n int) string {
	if n%10 == 0 {
		return fmt.Sprintf("%d", n/10)
	}
	return fmt.Sprintf("%.1f", float64(n)/10)
}

func main() {
	for i := 0; i <= 20; i += 2 {
		for j := 1; j <= 3; j++ {
			fmt.Printf("I=%s J=%s\n", format(i), format(i+10*j))
		}
	}
}
