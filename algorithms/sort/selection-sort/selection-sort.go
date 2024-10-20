package main

import "fmt"

func searchLower(array []int) int {
	lowerIndex := 0
	lowerValue := array[lowerIndex]
	length := len(array)

	for i := 1; i < length; i++ {
		if array[i] < lowerValue {
			lowerValue = array[i]
			lowerIndex = i
		}
	}

	return lowerIndex
}

func remove(s []int, i int) []int {
	return append(s[:i], s[i+1:]...)
}

func selectionSort(array []int) []int {
	newArray := []int{}
	length := len(array)

	for i := 0; i < length; i++ {
		lower := searchLower(array)
		newArray = append(newArray, array[lower])
		array = remove(array, lower)
	}

	return newArray
}

func main() {
	fmt.Println(selectionSort([]int{2, 5, 1, -4, 10, 0, 100}))
	fmt.Println(selectionSort([]int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0}))
}
