# Pilha (Stack)

## Descrição
A **Pilha** é uma estrutura de dados linear que segue o princípio **LIFO** (*Last-In, First-Out*), ou seja, o último elemento a entrar é o primeiro a sair. Imagine uma pilha de pratos: o último prato colocado no topo da pilha é o primeiro a ser retirado.

## Operações Principais
1. **push(item)**: Adiciona um item ao topo da pilha.
2. **pop()**: Remove e retorna o item no topo da pilha.
3. **peek()**: Retorna o item no topo da pilha sem removê-lo.
4. **isEmpty()**: Verifica se a pilha está vazia.

## Complexidade
- **Tempo de execução (Time Complexity)**:
  - **push**: O(1)
  - **pop**: O(1)
  - **peek**: O(1)
  - **isEmpty**: O(1)
  
- **Complexidade de espaço (Space Complexity)**: O(n), onde `n` é o número de elementos na pilha.

## Funcionamento
1. A pilha começa vazia.
2. Quando um elemento é **adicionado** (`push`), ele é colocado no topo da pilha.
3. Quando um elemento é **removido** (`pop`), ele é retirado do topo da pilha, seguindo o princípio LIFO.
4. É possível **visualizar** o item no topo da pilha sem removê-lo usando a operação `peek`.
