## Case Niuco

Este projeto consiste em uma aplicação Node.js que implementa um servidor de API REST simulado utilizando Express.js. A API retorna dados de usuários após transformações específicas, como ofuscação de e-mails e formatação de datas, conforme requisitos específicos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Axios
- Jest (para testes)
- Supertest (para testes de integração)
- dotenv (para carregar variáveis de ambiente)

## Funcionalidades

1. **Obfuscação de e-mail:** E-mails são ofuscados dependendo do domínio do usuário.
2. **Formatação de data:** A data da última atividade dos usuários é convertida para o formato ISO-8601 no UTC de Brasília.
3. **Verificação de status de pagamento e atividade:** Os usuários têm seus status de pagamento e atividade verificados para determinar se estão ativos e pagantes.

## Pré-requisitos

- Node.js instalado na máquina local
- Arquivo `.env` configurado com as variáveis necessárias (veja abaixo)

## Instalação

1. Clone o repositório para a sua máquina local:

   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências do projeto:

   ```
   cd <NOME_DO_DIRETORIO>
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias:

   ```
   API_URL=http://localhost:3000
   ```

## Execução

Para iniciar o servidor:

```
npm start
```

O servidor estará disponível em `http://localhost:3001`.

## Testes

Para executar os testes unitários:

```
npm test
```

Para executar os testes de integração:

```
npm run test:integration
```

## Estrutura de Arquivos

- **`src/`**: Contém o código-fonte da aplicação.
- **`tests/`**: Contém os testes unitários e de integração.
- **`.env`**: Arquivo de configuração das variáveis de ambiente.
