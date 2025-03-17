// https://judge.beecrowd.com/pt/problems/view/1040
package main

import (
	"fmt"
)

func main() {
	var n1, n2, n3, n4 float64

	fmt.Scanf("%f %f %f %f", &n1, &n2, &n3, &n4)

	w1 := 2.0
	w2 := 3.0
	w3 := 4.0
	w4 := 1.0

	average := ((n1 * w1) + (n2 * w2) + (n3 * w3) + (n4 * w4)) / (w1 + w2 + w3 + w4)

	fmt.Printf("Media: %.1f\n", average)

	if average >= 7.0 {
		fmt.Println("Aluno aprovado.")
		return
	}

	if average < 5.0 {
		fmt.Println("Aluno reprovado.")
		return
	}

	fmt.Println("Aluno em exame.")

	var n5 float64

	fmt.Scanf("%f", &n5)

	fmt.Printf("Nota do exame: %.1f\n", n5)

	examAverage := (average + n5) / 2

	if examAverage >= 5.0 {
		fmt.Println("Aluno aprovado.")
	} else {
		fmt.Println("Aluno reprovado.")
	}

	fmt.Printf("Media final: %.1f\n", examAverage)
}
