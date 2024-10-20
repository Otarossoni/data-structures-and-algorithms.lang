# Ordenação por Seleção (Selection Sort)

## Descrição
A **Ordenação por Seleção** é um algoritmo simples de ordenação que divide a lista em duas partes: a parte ordenada e a parte não ordenada. Ele funciona repetidamente encontrando o menor (ou maior, dependendo da ordem) elemento da parte não ordenada e movendo-o para o final da parte ordenada. Esse algoritmo é fácil de entender e implementar, mas não é muito eficiente para listas grandes.

## Complexidade
- **Tempo de execução (Time Complexity):**
  - Melhor Caso: O(n^2) (independente da ordem inicial)
  - Pior Caso: O(n^2)
  - Caso Médio: O(n^2)
  
- **Complexidade de espaço (Space Complexity):** O(n) (devido à criação de um novo array)

## Funcionamento
1. Começa com um array não ordenado. A cada iteração, o algoritmo procura o menor elemento no array.
2. Uma vez que o menor elemento é encontrado, ele é removido do array original e adicionado ao final do novo array, que começa vazio.
3. O processo é repetido até que todos os elementos sejam movidos para o novo array e a lista original esteja vazia.
4. O novo array resultante é então retornado como o array ordenado.
