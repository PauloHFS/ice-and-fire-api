# ice-and-fire-api

API desenvolvida para o desafio da Mobix.

#### (Docker)

###### Criando a imagem

```bash
docker build . -t ice-and-fire-api
```

###### Rodando a imagem

```bash
docker run -p <porta>:3333 -d ice-and-fire-api
```

###### Verificando a execução

```bash
docker logs <container id>
```

```
curl -i localhost:<porta>
```

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
