Projeto Restaurantes com o clima
Este projeto é uma aplicação de recomendação de restaurantes, que leva em consideração o clima atual e o tipo de restaurante preferido pelo utilizador. Utilizando dados do OpenWeather API para clima e Yelp API para restaurantes, a aplicação oferece sugestões personalizadas.

Funcionalidades
Consultar o clima atual de uma cidade.
Buscar restaurantes próximos com base na cidade, especialidade e raio.
Recomendar restaurantes com base no clima (ex: em dias de sol, recomenda restaurantes com esplanada).

Tecnologias Utilizadas
Node.js, Express.js, Docker, Supabase, OpenWeather API, Yelp API

Pré-requisitos
Antes de executar a aplicação, certifique-se de que tem os seguintes programas instalados:
node.js - https://nodejs.org/en
docker - https://www.docker.com/
Além disso, será necessário obter as chaves de API para o OpenWeather e o Yelp.
OpenWeather API - https://openweathermap.org/
Yelp API- https://www.yelp.pt/lisboa

Configuração no Supabase
A aplicação utiliza o Supabase para armazenar as requisições realizadas pelos utilizadores.
 - Abrir o Supabase - https://supabase.com/
 - Criar um novo projeto
 - Em "Database", crie uma nova tabela chamada "requisicoes" com os seguintes campos:
 id: Tipo bigint, Auto Incremento, Chave Primária.
 cidade: Tipo text.
 data_hora_pesquisada: Tipo timestamp.
 raio: Tipo integer.
 especialidade: Tipo text.
 temperatura: Tipo float.
 descricao_clima: Tipo text.
 ip_solicitante: Tipo text.
 timestamp_requisicao: Tipo timestamp.
Após criar a tabela, obtenha a URL do Supabase e a chave de API (API Key) do seu projeto.

Como executar o projeto
 - Clone o repositório
 "git clone https://github.com/SEU-USUARIO/projeto-restaurantes.git
cd projeto-restaurantes"
 - Instale as dependências
 "npm install"
 - Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente para as APIs e Supabase:
 "OPENWEATHER_API_KEY=SuaChaveAPIOpenWeather
  YELP_API_KEY=SuaChaveAPIYelp
  SUPABASE_URL=SuaURLDoSupabase
  SUPABASE_KEY=SuaChaveAPIKeySupabase"
 - Para adicionar ao Docker, construa a imagem e execute o contêiner com os seguintes comandos:
 "docker-compose build
  docker-compose up"
  - A aplicação estará disponível em http://localhost:3000

Como usar a API
Obter o clima e restaurantes
ENDPOINT
"/:cidade/:raio/:especialidade/:data"
Parâmetros:
cidade: Nome da cidade para obter o clima e restaurantes.
raio: Raio de pesquisa em quilometros.
especialidade: Tipo de restaurante (ex: pizzaria, sushi).
data: Data e hora para a consulta do clima (formato: YYYY-MM-DDTHH:mm:ss).


