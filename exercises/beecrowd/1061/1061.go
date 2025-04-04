// https://judge.beecrowd.com/pt/problems/view/1061
package main

import (
	"fmt"
)

func main() {
	var startDay, endDay int
	var h1, m1, s1 int
	var h2, m2, s2 int

	fmt.Scanf("Dia %d", &startDay)
	fmt.Scanf("%d : %d : %d", &h1, &m1, &s1)
	fmt.Scanf("Dia %d", &endDay)
	fmt.Scanf("%d : %d : %d", &h2, &m2, &s2)

	startSeconds := startDay*86400 + h1*3600 + m1*60 + s1
	endSeconds := endDay*86400 + h2*3600 + m2*60 + s2

	duration := endSeconds - startSeconds

	days := duration / 86400
	duration %= 86400

	hours := duration / 3600
	duration %= 3600

	minutes := duration / 60
	seconds := duration % 60

	fmt.Printf("%d dia(s)\n", days)
	fmt.Printf("%d hora(s)\n", hours)
	fmt.Printf("%d minuto(s)\n", minutes)
	fmt.Printf("%d segundo(s)\n", seconds)
}
