class Queue<T> {
  private items: T[] = []
  
  enqueue(item: T): void {
    this.items.push(item)
  }
  
  dequeue(): T | undefined {
    return this.items.shift()
  }
  
  peek(): T | undefined {
    return this.items[0]
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
  
const queue = new Queue<number>()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
  
console.log(queue.dequeue()) 
console.log(queue.peek())    
console.log(queue.size())    
console.log(queue.isEmpty()) 
queue.clear()
console.log(queue.isEmpty()) 
  