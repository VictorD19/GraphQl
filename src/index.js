const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers/resolvers.js");
const { schema } = require("./schema/schema.js");
const db = require("./db/db");
const Users = require("./data-source/user.js");
require('./db/index')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  tracing: true,
  context: () => {
    return {
      db
    }
  },
  dataSources: () => ({
    users: new Users(db.User),
  }),

});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
