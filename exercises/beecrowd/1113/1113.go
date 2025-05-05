// https://judge.beecrowd.com/pt/problems/view/1113
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Fields(line)
		if len(parts) != 2 {
			continue
		}

		x, _ := strconv.Atoi(parts[0])
		y, _ := strconv.Atoi(parts[1])

		if x == y {
			break
		}

		if x < y {
			fmt.Println("Crescente")
		} else {
			fmt.Println("Decrescente")
		}
	}
}
