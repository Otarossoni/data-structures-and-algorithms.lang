// https://judge.beecrowd.com/pt/problems/view/1049
package main

import (
	"fmt"
)

func main() {
	var category, class, diet string

	fmt.Scanln(&category)
	fmt.Scanln(&class)
	fmt.Scanln(&diet)

	animalMap := map[string]map[string]map[string]string{
		"vertebrado": {
			"ave": {
				"carnivoro": "aguia",
				"onivoro":   "pomba",
			},
			"mamifero": {
				"onivoro":   "homem",
				"herbivoro": "vaca",
			},
		},
		"invertebrado": {
			"inseto": {
				"hematofago": "pulga",
				"herbivoro":  "lagarta",
			},
			"anelideo": {
				"hematofago": "sanguessuga",
				"onivoro":    "minhoca",
			},
		},
	}

	if animal, ok := animalMap[category][class][diet]; ok {
		fmt.Println(animal)
	}
}
