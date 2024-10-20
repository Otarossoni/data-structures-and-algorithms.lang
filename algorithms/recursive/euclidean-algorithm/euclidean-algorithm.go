package main

import "fmt"

func euclideanAlgorithm(a, b int) int {
	if b == 0 {
		return a
	}

	return euclideanAlgorithm(b, a%b)
}

func main() {
	fmt.Println(euclideanAlgorithm(1, 10))
	fmt.Println(euclideanAlgorithm(56, 98))
	fmt.Println(euclideanAlgorithm(105, 252))
}
