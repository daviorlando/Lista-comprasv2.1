# Lista de Produtos - Angular 18

Este é um projeto simples de Lista de Compras desenvolvido com Angular 18. Ele permite ao usuário adicionar, editar, marcar como comprados, agrupar por status e excluir itens de uma lista interativa.

## Funcionalidades

### 1. Criação de Itens na Lista
- O usuário pode adicionar novos itens na lista através de um campo de texto.
- Os itens são adicionados dinamicamente e aparecem diretamente na interface.

### 2. Edição de Itens
- O usuário pode editar os itens da lista clicando em um ícone de edição ao lado do item.
- As alterações são atualizadas em tempo real na lista.

### 3. Marcar como Comprado
- Cada item pode ser marcado como "comprado", alterando visualmente a cor ou o estilo do item na lista.
- Itens comprados e não comprados são exibidos separadamente.

### 4. Agrupamento por Status
- A lista separa automaticamente os itens "Comprados" dos "Não Comprados".
- Ambos os grupos são exibidos na mesma página, proporcionando uma visualização clara e organizada.

### 5. Exclusão de Itens
- O usuário pode excluir qualquer item da lista clicando no ícone de "lixeira" ao lado do item.
- Após a exclusão, o item desaparece imediatamente da lista.

## Instalação

### Pré-requisitos
- Node.js (v16 ou superior)
- Angular CLI

### Passos para execução:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```bash
    npm start
    ```

4. Acesse o aplicativo em:
    ```
    http://localhost:4200
    ```

## Estrutura do Projeto

- **src/app/components/**: Contém os componentes do projeto, incluindo a lista de itens, o campo de adição e botões de ação (edição, exclusão, etc.).
- **src/app/services/**: Inclui serviços para gerenciamento de dados (se aplicável, como armazenamento local ou conexão com APIs).
- **src/styles/**: Contém estilos globais e específicos para os itens comprados e não comprados.

## Contribuição

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Push a branch (`git push origin feature/nova-funcionalidade`).
5. Crie um Pull Request.

## Tecnologias Utilizadas

- **Angular 18**: Framework principal para a construção da interface do usuário.
- **TypeScript**: Linguagem utilizada no desenvolvimento.
- **Bootstrap**: Para estilização básica (opcional).
