const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const graphqlHttp = require('koa-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = 4200;

const app = new Koa();
const router = new Router();
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

router.all('/graphql', graphqlHttp({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  pretty: true
}));

// If you run into a connection error, it is most likely because the current IP is not whitelisted. You'll have to login to change that.
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@pintracker-2jpiz.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => {
  app.listen(PORT);
  console.log(`connected to port ${PORT}`)
}).catch(e => {
  console.log(e);
})