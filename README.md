# cari-rumah
Node.js, Postgres, GraphQL backend web app

## Running the app

```
$ npm install
$ db-migrate up
$ node index.js
```

`index.js` is the entry point of the app. All it does is it sets the babel preset and the rest of the logic can be tracked down from `server.js`

You should be seeing the following

```
Express GraphQL Server Now Running On localhost:4000/graphql
```

Go to the link to access `GraphiQL`

