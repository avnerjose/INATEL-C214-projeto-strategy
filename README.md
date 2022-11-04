# Implementação do Design Pattern Strategy com TypeScript

### ✏️ Descrição do projeto
    
Projeto com o objetivo de implementar o design pattern Strategy em Typescript com o qual é possível ordenar dados com diferentes algoritmos.

Os algoritmos implementados foram:

- QuickSort
- BubbleSort
- MergeSort
- SelectionSort

### 📚 Arquivos do projeto:

- Pasta Classes:
  - Classe base que utiliza um algoritmo de ordenação "DataSorting.ts"
  - Classes que estendem de DataSorting aplicando os diversos algoritmos de ordenação.

- Pasta Interfaces 
  - Interface para delimitar o comportamento dos algoritmos de ordenação
  - Implementação dos diferentes algoritmos de ordenação

### ⚙️ Dependências

- [NodeJS](https://nodejs.org)

### 🚀 Executando o projeto

1 - Clone o repositório

``` bash
git clone https://github.com/avnerjose/INATEL-C214-projeto-strategy.git && cd INATEL-C214-projeto-strategy
```

2 - Execute o projeto
```bash 
npm run start
```

### 🧪 Executando testes unitários com JEST

```bash
npm run test 
``` 
