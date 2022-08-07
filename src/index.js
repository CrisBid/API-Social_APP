import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";
import startApolloServer from "./server.js";

startApolloServer({typeDefs,resolvers});