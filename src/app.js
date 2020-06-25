import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';

config(); //

const port = process.env.PORT || 3000;
// GraphQl Schema

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const models = require('./database/models');

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

const app = express();
server.applyMiddleware({ app });

// models.sequelize.authenticate();
// models.sequelize.sync();

app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`));

export default app;
