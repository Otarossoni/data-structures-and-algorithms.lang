package main

import "fmt"

func binarySearch(list []int, target int) int {
	low := 0
	high := len(list) - 1

	for low <= high {
		medium := (low + high) / 2
		value := list[medium]

		if value == target {
			return medium
		}

		if value > target {
			high = medium - 1
		} else {
			low = medium + 1
		}
	}

	return -1
}

func main() {
	list := []int{10, 20, 30, 40, 50}

	fmt.Println(binarySearch(list, 0))
	fmt.Println(binarySearch(list, 10))
	fmt.Println(binarySearch(list, 50))
}
