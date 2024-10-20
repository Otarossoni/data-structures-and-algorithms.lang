function quicksort(array: number[]): number[] {
  if (array.length < 2) {
    return array
  }

  const pivot = array[0]

  const less = array.slice(1).filter(item => item <= pivot)
  const greater = array.slice(1).filter(item => item > pivot)
  
  return [...quicksort(less), pivot, ...quicksort(greater)]
}

console.log(quicksort([2, 5, 1, -4, 10, 0, 100]))
console.log(quicksort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))