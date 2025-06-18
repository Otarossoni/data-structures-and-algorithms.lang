// https://judge.beecrowd.com/pt/problems/view/1154
package main

import "fmt"

func main() {
	var age, sum, count int

	for {
		fmt.Scan(&age)
		if age < 0 {
			break
		}
		sum += age
		count++
	}

	average := float64(sum) / float64(count)
	fmt.Printf("%.2f\n", average)
}
