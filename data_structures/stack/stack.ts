class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }

  clear(): void {
    this.items = []
  }
}
  
const stack = new Stack<number>()
stack.push(10)
stack.push(20)
stack.push(30)
  
console.log(stack.pop())   
console.log(stack.peek())  
console.log(stack.size()) 
console.log(stack.isEmpty())
stack.clear()
console.log(stack.isEmpty()) 
  