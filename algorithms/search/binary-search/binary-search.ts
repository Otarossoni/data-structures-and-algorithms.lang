export function binarySearch<T> (list: T[], target: T): number {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const medium = Math.floor((low + high) / 2)
    const value = list[Math.round(medium)]

    if (value === target) {
      return medium
    }

    if (value > target) {
      high = medium - 1
    } else {
      low = medium + 1
    }
  }
  
  return -1
}