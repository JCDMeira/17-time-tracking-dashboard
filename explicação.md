Boa noite pessoal, após algumas pesquisas mais a fundo eu descobri como fazer o deploy com o json server sendo uma fake API.
Bem, exige diversas configurações, vou tentar resumir o processo aqui para se caso um dia alguém precise.

1º - O banco de dados vai ser um arquivo chamado db.json que tem que estar na raiz, e aparentemente ele tem um peso máximo para que funcione adequadamente.

2º - Na raiz do projeto é preciso criar um arquivo server.js, que contém o seguinte código

```js
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
```

3º - Coloque a API configurada como a seguir em src/services/api.js

Para aplicações que vão simular os métodos e mais interações têm configurações adicionais, eu só estava consumindo dados, então não sei todos os procedimentos para isso ainda.

```js
import axios from 'axios';
import url from '../config/index';

export const api = axios.create({
  baseURL: `${url.URL_BACKEND}`,
});
```

4º - Crie uma configuração em src/config/index.js

Aqui é para que o endereço se adeque se você estiver em ambiente local ou remoto, acredito que poderia ser algo com .env também, mas no exemplo estava com um js dessa forma e dentro dessa estrutura de pastas.

```js
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://time-tracking-dashboard-back.herokuapp.com';

export default {
  URL_BACKEND,
};
```

5º - Nos scripts em package.json vai ser necessário alterar os scrips

a heroku acessa por padrão o comando de start para o deploy e a netlify e vercel o build, portanto vamos usar a heroku para o fake back-end e a vercel ou netlify para front-end

vamos então 'sacrificar' o start, para fazer ele apontar para o server, que vai rodar o arquivo ./server na raiz do projeto.

e para continuar usando um comando de testes local eu criei o dev com auxílio da biblioteca concurrently, que roda dois comando que ocupam o terminal de uma vez, e ali rodei o start e o server.

```json
"scripts": {
    "start": "yarn server",
    "start:front": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node ./server",
    "dev": "concurrently \"react-scripts start arg\" \"node server.js\""
  },
```

6º - É só ir fazer o deploy na heroku para back-end e no local de preferência para o front-end

obs: é preciso ter apenas um arquivo .lock, use ou o package.lock ou o yarn.lock
