function linearSearch<T>(list: T[], target: T): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i 
    }
  }
  return -1
}

const linearSearchList = [10, 20, 30, 40, 50]

console.log(linearSearch(linearSearchList, 0))
console.log(linearSearch(linearSearchList, 10))
console.log(linearSearch(linearSearchList, 50))