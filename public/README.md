# Football Leagues

Projeto desenvolvido para o Trabalho Pratico 2, com foco em exibicao, cadastro, pesquisa, detalhamento e favoritar ligas de futebol.

## Descricao

O Football Leagues e um portal web para navegacao por ligas de futebol internacionais. A aplicacao permite visualizar ligas em destaque, pesquisar ligas cadastradas, acessar detalhes, criar usuarios, fazer login, marcar ligas como favoritas e gerenciar os itens cadastrados quando o usuario possui permissao de administrador.

## Funcionalidades

- Home-page com menu de navegacao.
- Listagem de ligas em formato de cards.
- Carrossel com ligas em destaque.
- Pesquisa de ligas por nome ou descricao.
- Pagina de detalhes da liga selecionada.
- Cadastro de novos usuarios.
- Login e logout de usuario.
- Controle de sessao com `sessionStorage`.
- Persistencia de dados com `localStorage`.
- Marcacao e remocao de favoritos.
- Pagina exclusiva para visualizar favoritos do usuario logado.
- Mensagem centralizada quando o usuario ainda nao possui favoritos.
- Area administrativa para cadastrar, editar, excluir e visualizar ligas.
- Menu de gerenciamento visivel apenas para usuarios administradores.

## Usuario administrador para teste

Use os dados abaixo para testar o modo administrador:

```text
E-mail: admin@admin.com
Senha: admin123
```

## Como executar

1. Baixe ou extraia todos os arquivos do projeto.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo `index.html` no navegador.
4. Se preferir, use a extensao Live Server e abra o endereco local gerado.

## Estrutura esperada

```text
/
|-- public/
|-- imgsLigas/
|-- index.html
|-- login.html
|-- cadastro_usuario.html
|-- cadastro_itens.html
|-- detalhes.html
|-- favoritos.html
|-- index.css
|-- index.js
|-- README.md
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- LocalStorage
- SessionStorage

## Armazenamento dos dados

Os dados das ligas, usuarios cadastrados e favoritos sao mantidos no navegador usando `localStorage`.

A informacao do usuario logado e mantida durante a sessao usando `sessionStorage`, permitindo que o menu e as telas se adaptem ao status de login.

## Fluxo de uso

1. O visitante acessa a home-page e visualiza as ligas disponiveis.
2. O visitante pode pesquisar ligas e abrir a pagina de detalhes.
3. Para favoritar ligas, o usuario precisa fazer login.
4. Apos o login, o usuario pode marcar e remover favoritos.
5. O usuario pode acessar a pagina de favoritos para visualizar apenas os itens marcados.
6. O administrador pode acessar a tela de gerenciamento e fazer o CRUD das ligas.

## Autor

Aluno: Henrique Shevchenko  
Curso: Analise e Desenvolvimento de Sistemas  
Turno: Manha
