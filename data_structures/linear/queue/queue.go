package main

import "fmt"

type Queue[T any] struct {
	items []T
}

func (q *Queue[T]) Enqueue(item T) {
	q.items = append(q.items, item)
}

func (q *Queue[T]) Dequeue() (T, bool) {
	var zeroValue T
	if len(q.items) == 0 {
		return zeroValue, false
	}
	item := q.items[0]
	q.items = q.items[1:]
	return item, true
}

func (q *Queue[T]) Peek() (T, bool) {
	var zeroValue T
	if len(q.items) == 0 {
		return zeroValue, false
	}
	return q.items[0], true
}

func (q *Queue[T]) IsEmpty() bool {
	return len(q.items) == 0
}

func (q *Queue[T]) Size() int {
	return len(q.items)
}

func (q *Queue[T]) Clear() {
	q.items = []T{}
}

func main() {
	queue := Queue[int]{}

	queue.Enqueue(1)
	queue.Enqueue(2)
	queue.Enqueue(3)

	item, ok := queue.Dequeue()
	if ok {
		fmt.Println(item)
	}

	peek, ok := queue.Peek()
	if ok {
		fmt.Println(peek)
	}

	fmt.Println(queue.Size())
	fmt.Println(queue.IsEmpty())

	queue.Clear()
	fmt.Println(queue.IsEmpty())
}
