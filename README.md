Case Niuco
Este projeto consiste em uma aplicação Node.js que implementa um servidor de API REST simulado utilizando Express.js. A API retorna dados de usuários após transformações específicas, como ofuscação de e-mails e formatação de datas, conforme requisitos específicos.

Tecnologias Utilizadas
Node.js
Express.js
Axios
Jest (para testes)
Supertest (para testes de integração)
dotenv (para carregar variáveis de ambiente)
Funcionalidades
Obfuscação de e-mail: E-mails são ofuscados dependendo do domínio do usuário.
Formatação de data: A data da última atividade dos usuários é convertida para o formato ISO-8601 no UTC de Brasília.
Verificação de status de pagamento e atividade: Os usuários têm seus status de pagamento e atividade verificados para determinar se estão ativos e pagantes.
Pré-requisitos
Node.js instalado na máquina local
Arquivo .env configurado com as variáveis necessárias (veja abaixo)
Instalação
Clone o repositório para a sua máquina local:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
Instale as dependências do projeto:

bash
Copiar código
cd <NOME_DO_DIRETORIO>
npm install
Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias:

arduino
Copiar código
API_URL=http://localhost:3000
Substitua http://localhost:3000 pelo URL da sua API, se aplicável.

Execução
Para iniciar o servidor:

sql
Copiar código
npm start
O servidor estará disponível em http://localhost:3000.

Testes
Para executar os testes unitários:

bash
Copiar código
npm test
Para executar os testes de integração:

arduino
Copiar código
npm run test:integration
