// https://judge.beecrowd.com/pt/problems/view/1120
package main

import (
	"fmt"
	"strings"
)

func main() {
	var digitToRemove string
	var numberString string

	for {
		fmt.Scan(&digitToRemove, &numberString)

		if digitToRemove == "0" && numberString == "0" {
			break
		}

		result := strings.ReplaceAll(numberString, digitToRemove, "")

		if len(result) == 0 {
			fmt.Println("0")
			continue
		}

		firstNonZero := 0
		for firstNonZero < len(result)-1 && result[firstNonZero] == '0' {
			firstNonZero++
		}

		fmt.Println(result[firstNonZero:])
	}
}
