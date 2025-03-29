// https://judge.beecrowd.com/pt/problems/view/1050
package main

import (
	"fmt"
)

func main() {
	var ddd int

	fmt.Scanln(&ddd)

	dddMap := map[int]string{
		61: "Brasilia",
		71: "Salvador",
		11: "Sao Paulo",
		21: "Rio de Janeiro",
		32: "Juiz de Fora",
		19: "Campinas",
		27: "Vitoria",
		31: "Belo Horizonte",
	}

	if city, ok := dddMap[ddd]; ok {
		fmt.Println(city)
	} else {
		fmt.Println("DDD nao cadastrado")
	}
}
