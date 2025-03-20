// https://judge.beecrowd.com/pt/problems/view/1042
package main

import (
	"fmt"
)

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
	var a, b, c int

	fmt.Scanf("%d %d %d", &a, &b, &c)

	values := []int{a, b, c}
	sortedValues := quicksort(values)

	for _, v := range sortedValues {
		fmt.Println(v)
	}

	fmt.Println()

	for _, v := range values {
		fmt.Println(v)
	}
}
