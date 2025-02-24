// https://judge.beecrowd.com/pt/problems/view/1007
package main

import "fmt"

func main() {
	var a int
	var b int
	var c int
	var d int

	fmt.Scanln(&a)
	fmt.Scanln(&b)
	fmt.Scanln(&c)
	fmt.Scanln(&d)

	fmt.Println("DIFERENCA =", a*b-c*d)
}
