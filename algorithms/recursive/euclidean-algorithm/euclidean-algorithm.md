# Algoritmo de Euclides

## Descrição
O **Algoritmo de Euclides** é um método eficiente para calcular o **Máximo Divisor Comum (MDC)** de dois números inteiros. O MDC é o maior número que divide ambos os números sem deixar resto. Esse algoritmo é amplamente utilizado em matemática, especialmente na teoria dos números.

## Complexidade
- **Tempo de execução (Time Complexity):** O(log(min(a, b))) (a cada passo, o tamanho dos números é reduzido)
- **Complexidade de espaço (Space Complexity):** O(log(min(a, b))) (devido à pilha de chamadas da recursão)

## Funcionamento
1. O algoritmo começa verificando se o segundo número (`b`) é `0`. Se for, o primeiro número (`a`) é o MDC e é retornado.
2. Caso contrário, o algoritmo chama a si mesmo com `b` e o resto da divisão de `a` por `b` (`a % b`).
3. Esse processo se repete até que `b` se torne `0`, momento em que `a` será o MDC dos dois números.
