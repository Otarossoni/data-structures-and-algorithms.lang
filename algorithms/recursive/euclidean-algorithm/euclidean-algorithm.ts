function euclideanAlgorithm(a: number, b: number): number {
  if (b === 0) {
    return a
  }

  return euclideanAlgorithm(b, a % b)
}

console.log(euclideanAlgorithm(1, 10))
console.log(euclideanAlgorithm(56, 98))
console.log(euclideanAlgorithm(105, 252))