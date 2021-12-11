/*
  _ A heroku faz o comando start do package.json
  _ enquanto a vercel usa o build. (a netlify também ?)
  _ isso nós leva a "sacrificar" o comando start para poder usar a fake API com a heroku
  ? "scripts": {
  ?   "start": "yarn server",
  ?   "start:front": "react-scripts start",
  ?   "build": "react-scripts build",
  ?   "test": "react-scripts test",
  ?   "eject": "react-scripts eject",
  ?   "server": "node ./server"
  ? },

*/
