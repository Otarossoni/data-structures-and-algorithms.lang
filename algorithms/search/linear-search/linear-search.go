package main

import "fmt"

func linearSearch(list []int, target int) int {
	for i, value := range list {
		if value == target {
			return i
		}
	}
	return -1
}

func main() {
	list := []int{10, 20, 30, 40, 50}

	fmt.Println(linearSearch(list, 0))
	fmt.Println(linearSearch(list, 10))
	fmt.Println(linearSearch(list, 50))
}
