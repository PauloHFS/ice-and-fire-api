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

