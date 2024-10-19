# Busca Binária

## Descrição
A **Busca Binária** é um algoritmo de busca eficiente que encontra a posição de um valor em um array **ordenado**. Ela funciona dividindo o array ao meio repetidamente até encontrar o elemento desejado. Esse algoritmo é aplicável somente a arrays que já estão ordenados.

## Complexidade
- **Tempo de execução (Time Complexity):**
  - Melhor Caso: O(1) (quando o elemento está no meio do array)
  - Caso Médio: O(log n)
  - Pior Caso: O(log n)
  
- **Complexidade de espaço (Space Complexity):** O(1)

## Funcionamento
1. Definir dois ponteiros, `início` e `fim`, que apontam para o começo e o final do array, respectivamente.
2. Calcular o índice médio (`meio`) do array.
3. Comparar o valor do meio com o valor alvo:
   - Se for igual, o elemento foi encontrado.
   - Se o valor do meio for maior que o alvo, ajustar o ponteiro `fim` para `meio - 1` (descartar a metade superior).
   - Se o valor do meio for menor que o alvo, ajustar o ponteiro `início` para `meio + 1` (descartar a metade inferior).
4. Repetir o processo até encontrar o valor ou até `início` ser maior que `fim` (o que significa que o valor não está no array).
