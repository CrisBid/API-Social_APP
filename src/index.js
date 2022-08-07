import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";
import startApolloServer from "./server.js";
require('dotenv/config');

startApolloServer({typeDefs,resolvers});