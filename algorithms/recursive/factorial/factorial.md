# Fatorial

## Descrição
O **Fatorial** de um número inteiro não negativo `n` (denotado como `n!`) é o produto de todos os inteiros positivos menores ou iguais a `n`. Por definição, o fatorial de `0` é `1`. Este algoritmo é frequentemente usado em matemática, estatística e combinatória para calcular o número de maneiras de organizar ou selecionar elementos.

## Complexidade
- **Tempo de execução (Time Complexity):** O(n) (porque faz `n` chamadas recursivas)
- **Complexidade de espaço (Space Complexity):** O(n) (devido à pilha de chamadas da recursão)

## Funcionamento
1. O algoritmo começa verificando se o número (`num`) é igual a `1`. Se for, retorna `1` (caso base).
2. Caso contrário, o algoritmo chama a si mesmo, passando `num - 1` como argumento. Este é o passo recursivo.
3. O resultado da chamada recursiva é multiplicado pelo número atual (`num`), formando o produto que representa o fatorial.
4. O processo continua até que a condição do caso base (num == 1) seja atingida, somando as multiplicações de cada nível da recursão.

