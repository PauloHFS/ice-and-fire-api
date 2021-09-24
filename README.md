# ice-and-fire-api

API desenvolvida para o desafio da Mobix.

A API está online pelo Replit na URL: [https://ice-and-fire-api.paulohfs.repl.co/](https://ice-and-fire-api.paulohfs.repl.co/)

| Rotas                  |                                                              |
| :--------------------- | ------------------------------------------------------------ |
| /books                 | Retorna o ISBM e a capa (Base64) de todos os livros.         |
| /books/:isbm           | Retorna o ISBM e a capa em formato do livro daquele ISBM.    |
| /characters            | Retorna a informação de todos os personagens.                |
| /characters/:id:       | Retorna todas as informações do personagem passado pelo ID.  |
| /characters/:id:/books | Retorna todos os livros em que o personagem passado pelo ID aparece. |
| /pov                   | Retorna a informação de todos os personagens que tiveram Point-of-View nos livros. |
| /pov/:id:              | Retorna todas as informações do personagem que teve PoV passado pelo ID. |
| /pov/:id:/books        | Retorna todos os livros em que o personagem que teve PoV passado pelo ID aparece. |

## Backend Challenge

Criar uma API em NodeJS que:

- [X] Obtenha a informação completa dos principais personagens (`povCharacters`) das Crônicas do Gelo e Fogo.
- [X] Obtenha a capa de um ou mais livros.
- [X] Obtenha o detalhe de um ou mais personagens.
- [X] Obtenha todos os livros relacionados a um personagem.
- [X] Não será permitido inserir informações com URL. Deve-se inserir todas as informações possíveis.
- [X] As informações deverão ser inseridas num banco de dados em MongoDb e a sua API deve usar o seu banco para consumo de dados.
- [X] A capa do livro deverá ser apresentada no formato base64.

## Extras
- [ ] Implementar testes unitários usando Jest
- [ ] Implementar autenticação OAuth 2.0
- [ ] Inserir projeto num container docker 
- [X] Deixar API online para acesso instantâneo
- [ ] Se até aqui você se divertiu muito, insira na imagem do livro o nome dos seus personagens principais no formato de marca d'água
- [X] Se você não ficou satisfeito com o desafio, insira também o link da Amazon para que possamos comprar os livros :-D (PS: Coloquei do biblio por praticidade)
