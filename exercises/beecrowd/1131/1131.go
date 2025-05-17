// https://judge.beecrowd.com/pt/problems/view/1131
package main

import "fmt"

func main() {
	var interGoals, gremioGoals, option int
	var interWins, gremioWins, draws, totalGames int

	for {
		fmt.Scan(&interGoals, &gremioGoals)

		if interGoals > gremioGoals {
			interWins++
		} else if gremioGoals > interGoals {
			gremioWins++
		} else {
			draws++
		}
		totalGames++

		fmt.Println("Novo grenal (1-sim 2-nao)")
		fmt.Scan(&option)
		if option != 1 {
			break
		}
	}

	fmt.Printf("%d grenais\n", totalGames)
	fmt.Printf("Inter:%d\n", interWins)
	fmt.Printf("Gremio:%d\n", gremioWins)
	fmt.Printf("Empates:%d\n", draws)

	if interWins > gremioWins {
		fmt.Println("Inter venceu mais")
	} else if gremioWins > interWins {
		fmt.Println("Gremio venceu mais")
	} else {
		fmt.Println("Nao houve vencedor")
	}
}
