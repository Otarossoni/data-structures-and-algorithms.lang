function factorial(num: number): number {
  if (num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
} 

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))