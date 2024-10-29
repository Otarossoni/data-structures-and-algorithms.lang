# Fila (Queue)

## Descrição
A **Fila** é uma estrutura de dados linear que segue o princípio **FIFO** (*First-In, First-Out*), ou seja, o primeiro elemento a entrar é o primeiro a sair. As filas são muito úteis em cenários onde a ordem dos elementos precisa ser preservada, como em sistemas de atendimento, processamento de tarefas e filas de impressão.

## Operações Principais
1. **enqueue(item)**: Adiciona um item ao final da fila.
2. **dequeue()**: Remove e retorna o item no início da fila.
3. **peek()**: Retorna o item no início da fila sem removê-lo.
4. **isEmpty()**: Verifica se a fila está vazia.

## Complexidade
- **Tempo de execução (Time Complexity)**:
  - **enqueue**: O(1)
  - **dequeue**: O(1)
  - **peek**: O(1)
  - **isEmpty**: O(1)
  
- **Complexidade de espaço (Space Complexity)**: O(n), onde `n` é o número de elementos na fila.

## Funcionamento
1. A fila começa vazia.
2. Quando um elemento é **adicionado** (`enqueue`), ele é colocado no final da fila.
3. Quando um elemento é **removido** (`dequeue`), ele é retirado do início da fila, seguindo o princípio FIFO.
4. É possível **visualizar** o item no início da fila sem removê-lo, usando a operação `peek`.

