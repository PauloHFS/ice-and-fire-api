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

