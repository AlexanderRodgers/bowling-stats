const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const graphqlHttp = require('koa-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = new Koa();
app.use(cors());
const router = new Router();

router.all('/graphql', graphqlHttp({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  pretty: true
}));

app.use(router.routes()).use(router.allowedMethods());