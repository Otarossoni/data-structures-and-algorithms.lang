package main

import "fmt"

func quicksort(array []int) []int {
	if len(array) < 2 {
		return array
	}

	pivot := array[0]

	var less []int
	var greater []int

	for _, item := range array[1:] {
		if item <= pivot {
			less = append(less, item)
		} else {
			greater = append(greater, item)
		}
	}

	return append(append(quicksort(less), pivot), quicksort(greater)...)
}

func main() {
	fmt.Println(quicksort([]int{2, 5, 1, -4, 10, 0, 100}))
	fmt.Println(quicksort([]int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0}))
}
