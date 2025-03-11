// https://judge.beecrowd.com/pt/problems/view/1019
package main

import (
	"fmt"
	"time"
)

func main() {
	var value int

	fmt.Scanln(&value)

	duration := time.Duration(value) * time.Second

	hours := int(duration.Hours())
	minutes := int(duration.Minutes()) % 60
	seconds := int(duration.Seconds()) % 60

	fmt.Printf("%d:%d:%d\n", hours, minutes, seconds)
}
