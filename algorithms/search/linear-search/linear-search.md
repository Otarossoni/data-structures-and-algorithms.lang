# Busca Linear

## Descrição
A **Busca Linear** é o algoritmo de busca mais simples. Ela percorre todos os elementos de uma lista, um por um, até encontrar o valor desejado ou até terminar de examinar todos os elementos. Funciona tanto para listas **ordenadas** quanto **não ordenadas**, mas não é muito eficiente para listas grandes, já que verifica cada elemento individualmente.

## Complexidade
- **Tempo de execução (Time Complexity):**
  - Melhor Caso: O(1) (quando o elemento está na primeira posição)
  - Caso Médio: O(n) (quando o elemento está em qualquer posição que não seja a primeira ou última)
  - Pior Caso: O(n) (quando o elemento está na última posição ou não está na lista)
  
- **Complexidade de espaço (Space Complexity):** O(1)

## Funcionamento
1. Comece verificando o primeiro elemento da lista.
2. Compare esse elemento com o valor que você está procurando:
   - Se for o valor desejado, a busca termina e o índice desse elemento é retornado.
   - Se não for, passe para o próximo elemento da lista.
3. Continue verificando cada elemento até encontrar o valor desejado ou até que todos os elementos tenham sido verificados.
4. Se o valor não for encontrado, retorne uma indicação de que o valor não está presente (geralmente `-1`).
