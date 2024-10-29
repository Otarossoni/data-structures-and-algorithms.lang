package main

import "fmt"

type Stack[T any] struct {
	items []T
}

func (s *Stack[T]) Push(item T) {
	s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
	var zeroValue T
	if len(s.items) == 0 {
		return zeroValue, false
	}
	item := s.items[len(s.items)-1]
	s.items = s.items[:len(s.items)-1]
	return item, true
}

func (s *Stack[T]) Peek() (T, bool) {
	var zeroValue T
	if len(s.items) == 0 {
		return zeroValue, false
	}
	return s.items[len(s.items)-1], true
}

func (s *Stack[T]) IsEmpty() bool {
	return len(s.items) == 0
}

func (s *Stack[T]) Size() int {
	return len(s.items)
}

func (s *Stack[T]) Clear() {
	s.items = []T{}
}

func main() {
	stack := Stack[int]{}

	stack.Push(10)
	stack.Push(20)
	stack.Push(30)

	if item, ok := stack.Pop(); ok {
		fmt.Println(item)
	}

	if peek, ok := stack.Peek(); ok {
		fmt.Println(peek)
	}

	fmt.Println(stack.Size())
	fmt.Println(stack.IsEmpty())

	stack.Clear()
	fmt.Println(stack.IsEmpty())
}
