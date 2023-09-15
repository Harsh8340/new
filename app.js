const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3009;

const startServer = async () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['X-auth-token'],
  };

  app.use(cors(corsOptions));

  const typeDefs = gql(
    fs.readFileSync('./schema.graphql', { encoding: 'utf-8' })
  );

  const resolvers = require('./resolvers.mjs');

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });
};

