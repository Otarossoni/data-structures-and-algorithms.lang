// https://judge.beecrowd.com/pt/problems/view/1017
package main

import (
	"fmt"
)

func main() {
	var time, speed int

	fmt.Scanln(&time)
	fmt.Scanln(&speed)

	fmt.Printf("%.3f\n", (float64(time)*float64(speed))/12.0)
}
