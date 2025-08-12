// https://judge.beecrowd.com/pt/problems/view/1024
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"unicode"
)

func main() {
	var numTestCases int
	fmt.Scan(&numTestCases)

	reader := bufio.NewReader(os.Stdin)

	for i := 0; i < numTestCases; i++ {
		line, _ := reader.ReadString('\n')

		line = strings.TrimSpace(line)

		if len(line) == 0 {
			continue
		}

		runes := []rune(line)
		for j := 0; j < len(runes); j++ {
			if unicode.IsLetter(runes[j]) {
				runes[j] += 3
			}
		}

		for j, k := 0, len(runes)-1; j < k; j, k = j+1, k-1 {
			runes[j], runes[k] = runes[k], runes[j]
		}

		halfIndex := len(runes) / 2
		for j := halfIndex; j < len(runes); j++ {
			runes[j] -= 1
		}

		fmt.Println(string(runes))
	}
}
