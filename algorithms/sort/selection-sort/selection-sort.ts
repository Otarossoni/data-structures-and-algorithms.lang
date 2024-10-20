function searchLower(array: number[]): number {
  let lowerIndex = 0
  let lowerValue = array[lowerIndex]

  for (let i = 1; i <= array.length; i++) {
    if (array[i] < lowerValue) {
      lowerValue = array[i]
      lowerIndex = i
    }
  }

  return lowerIndex
}

function selectionSort(array: number[]): number[] {
  const newArray: number[] = []
  const length = array.length

  for (let i = 0; i < length; i++) {
    const lower = searchLower(array)
    newArray.push(array.splice(lower, 1)[0])
  }

  return newArray
}

console.log(selectionSort([2, 5, 1, -4, 10, 0, 100]))
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))