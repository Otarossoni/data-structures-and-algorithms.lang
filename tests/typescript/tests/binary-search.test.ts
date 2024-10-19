import { describe, test, expect } from 'vitest'
import { binarySearch } from '../../../algorithms/search/binary-search/binary-search'

describe('Binary Search', () => {
  test('deve retornar o índice do elemento alvo quando ele está presente na lista', () => {
    const list = [1, 2, 3, 4, 5]
    const target = 3
    const result = binarySearch(list, target)
    expect(result).toBe(2) // 3 está no índice 2
  })

  test('deve retornar o índice do elemento alvo em uma lista com um único elemento', () => {
    const list = [1]
    const target = 1
    const result = binarySearch(list, target)
    expect(result).toBe(0) // 1 está no índice 0
  })

  test('deve retornar o índice do elemento alvo em uma lista de números negativos', () => {
    const list = [-10, -5, 0, 5, 10]
    const target = -5
    const result = binarySearch(list, target)
    expect(result).toBe(1) // -5 está no índice 1
  })

  test('deve retornar o índice do elemento alvo em uma lista de strings', () => {
    const list = ['maça', 'banana', 'cereja', 'limão']
    const target = 'cereja'
    const result = binarySearch(list, target)
    expect(result).toBe(2) // 'cereja' está no índice 2
  })

  test('deve retornar -1 se o alvo não estiver em uma lista com um único elemento', () => {
    const list = [1]
    const target = 2
    const result = binarySearch(list, target)
    expect(result).toBe(-1)
  })

  test('deve retornar -1 para uma lista de strings se o alvo não estiver presente', () => {
    const list = ['maça', 'banana', 'cereja', 'limão']
    const target = 'fig'
    const result = binarySearch(list, target)
    expect(result).toBe(-1)
  })

  test('deve retornar -1 quando o elemento alvo não está presente na lista', () => {
    const list = [1, 2, 3, 4, 5]
    const target = 6
    const result = binarySearch(list, target)
    expect(result).toBe(-1)
  })

  test('deve retornar -1 quando for uma lista vazia', () => {
    const list: number[] = []
    const target = 1
    const result = binarySearch(list, target)
    expect(result).toBe(-1)
  })
})
