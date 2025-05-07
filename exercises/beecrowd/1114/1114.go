// https://judge.beecrowd.com/pt/problems/view/1114
package main

import "fmt"

func main() {
	var password int
	for {
		fmt.Scan(&password)
		if password == 2002 {
			fmt.Println("Acesso Permitido")
			break
		}
		fmt.Println("Senha Invalida")
	}
}
