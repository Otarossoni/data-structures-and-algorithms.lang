package main

import "fmt"

func factorial(num int) int {
	if num == 1 {
		return 1
	} else {
		return num * factorial(num-1)
	}
}

func main() {
	fmt.Println(factorial(1))
	fmt.Println(factorial(2))
	fmt.Println(factorial(3))
	fmt.Println(factorial(4))
	fmt.Println(factorial(5))
}
