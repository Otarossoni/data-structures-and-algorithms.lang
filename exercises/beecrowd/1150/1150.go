// https://judge.beecrowd.com/pt/problems/view/1150
package main

import "fmt"

func main() {
	var x, z int
	fmt.Scan(&x)

	for {
		fmt.Scan(&z)
		if z > x {
			break
		}
	}

	sum := 0
	count := 0

	for i := x; sum <= z; i++ {
		sum += i
		count++
	}

	fmt.Println(count)
}
