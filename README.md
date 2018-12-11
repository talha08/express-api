# express-es6-starter

Starter project for creating a MVC express server, using

- express
- mongoose
- babel-cli
- winston and morgan for logging
- Async/Await

## Installation

Clone the repository and run `yarn`

## Starting the server

```
yarn run  start
```

The server will run on port 3000. You can change this by editing `config.dev.js` file.

## Run server in production with Docker

```
yarn run build
```

After npm building the project, go to project root directory, open shell and run:

```
docker build -t express-es6-starter .
```

## Debugging with Webstorm

Set babel-node executable as the node interpreter.
Pass node parameters of --preset=babel-preset-es2015
