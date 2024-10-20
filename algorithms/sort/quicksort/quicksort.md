# Quicksort

## Descrição
O **Quicksort** é um dos algoritmos de ordenação mais rápidos e populares, especialmente para grandes conjuntos de dados. Ele utiliza o conceito de **divisão e conquista**, selecionando um elemento chamado **pivô** e particionando o array em dois sub-arrays: um contendo elementos menores ou iguais ao pivô e outro contendo elementos maiores. O processo é repetido recursivamente nos sub-arrays, resultando em uma lista ordenada.

## Complexidade
- **Tempo de execução (Time Complexity):**
  - Melhor Caso: O(n log n)
  - Pior Caso: O(n²) (ocorre quando o pivô escolhido é sempre o menor ou maior elemento)
  - Caso Médio: O(n log n)
  
- **Complexidade de espaço (Space Complexity):** O(log n) (em uma implementação ideal com divisão balanceada)

## Funcionamento
1. Se o array tem menos de dois elementos, ele já está ordenado e é retornado imediatamente.
2. Escolhe-se o **pivô**, que no caso desta implementação é o primeiro elemento do array.
3. Dois novos arrays são criados:
   - **`less`**: Contém todos os elementos menores ou iguais ao pivô.
   - **`greater`**: Contém todos os elementos maiores que o pivô.
4. O algoritmo chama a si mesmo recursivamente para ordenar os arrays `less` e `greater`.
5. Finalmente, o array ordenado é formado concatenando os resultados da ordenação de `less`, o pivô e `greater`.
