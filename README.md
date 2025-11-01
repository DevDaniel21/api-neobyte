# Neobyte

Repositório do backend da Neobyte


## Equipe Backend

- [Daniel Custódio](https://www.github.com/DevDaniel21)
- [Matheus Bugatti](https://www.github.com/matheus-bugatti)


## Stack utilizada

**Backend:** Express

## Instalando e Rodando localmente

Clone o projeto

```bash
  git clone "https://github.com/DevDaniel21/api-neobyte"
```

Entre no diretório do projeto

```bash
  cd api-neobyte
```

Instale as dependências

```bash
  npm install
```

Gere o Prisma Client

```bash
  npx prisma generate
```

Crie um banco de dados no MySQL Workbench e atualize o .env

Envie as tabelas para o banco de dados
```bash
  npx prisma db push
```

Inicie o servidor

```bash
  npm start
```

# Rotas

## User

### `POST` Criar usuário
https://localhost:3000/user/

O nome é no máximo 45 caracteres, email no máximo 65 senha é no máximo 15. O body tem que conter:
```bash
{
    "nome": "Exemplo de Nome",
    "email": "exemplo@exemplo.com",
    "senha": "senha123"
}
```
### `GET` Listar produtos
https://localhost:3000/user/
### `GET` Listar usuário pelo email
https://localhost:3000/user/email/:email
### `GET` Listar usuário pelo id
https://localhost:3000/user/:id
### `PUT` Atualizar usuário
https://localhost:3000/user/:id

Coloque o que quiser mudar, aqui estão as opções, por enquanto não tem patch e não baixa imagens.
```bash
{
    "nome": "Exemplo de Nome",
    "email": "exemplo@exemplo.com",
    "senha": "senha123"
    "telefone": 12345-6789,
    "avatar": "./public/avatar21.png",
    "cpf": "123456789",
}
```
### `DELETE` Deletar usuário
https://localhost:3000/user/:id

## Produto

### `POST` Criar produto
https://localhost:3000/product/

O nome é no máximo 45 caracteres, por enquanto não temos uma lista de categorias específicas. Não é obrigatório valordesconto e capa, para a criação do produto.
```bash
{
    "nome": "Exemplo de Nome",
    "descricao": "exemplo@exemplo.com",
    "categoria": "senha123",
    "valor": 12.00,
    "valordesconto": 7.00,
    "capa": "./public/produto/capa21.png"
}
```
### `GET` Listar produtos
https://localhost:3000/product/
### `GET` Listar produto pelo id
https://localhost:3000/product/:id
### `PUT` Atualizar produto
https://localhost:3000/product/:id
Coloque o que quiser mudar, aqui estão as opções, por enquanto não patch e não baixa imagens
```bash
{
    "nome": "Exemplo de Nome",
    "descricao": "exemplo@exemplo.com",
    "categoria": "senha123",
    "valor": 12.00,
    "valordesconto": 7.00,
    "capa": "./public/produto/capa21.png"
}
```
### `DELETE` Deletar produto
https://localhost:3000/product/:id


## Favorito

### `POST` Criar favorito
https://localhost:3000/favorite/

No body é necessário tem o user_id e product_id.
```bash
{
    "user_id": 21,
    "product_id": 21,
}
```
### `GET` Listar favoritos pelo user_id
https://localhost:3000/favorite/:user_id
### `DELETE` Deletar favorito
https://localhost:3000/favorite/

No body é necessário tem o user_id e product_id.
```bash
{
    "user_id": 21,
    "product_id": 21,
}
```