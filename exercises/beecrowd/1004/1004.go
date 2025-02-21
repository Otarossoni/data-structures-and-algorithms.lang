// https://judge.beecrowd.com/pt/problems/view/1004
package main

import (
	"fmt"
)

func main() {
	var a int
	var b int

	fmt.Scanln(&a)
	fmt.Scanln(&b)

	fmt.Println("PROD =", (a * b))
}
