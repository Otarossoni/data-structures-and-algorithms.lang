// https://judge.beecrowd.com/pt/problems/view/1160
package main

import (
	"fmt"
)

func main() {
	var t int
	fmt.Scan(&t)

	for i := 0; i < t; i++ {
		var pa, pb int
		var g1, g2 float64

		fmt.Scan(&pa, &pb, &g1, &g2)

		years := 0

		for pa <= pb {
			pa += int(float64(pa) * g1 / 100)
			pb += int(float64(pb) * g2 / 100)
			years++

			if years > 100 {
				break
			}
		}

		if years > 100 {
			fmt.Println("Mais de 1 seculo.")
		} else {
			fmt.Printf("%d anos.\n", years)
		}
	}
}
