import { ApolloServer, gql  } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

async function startApolloServer({typeDefs, resolvers}) {
    const app = express();
  
    const httpServer = http.createServer(app);
  
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      
    });
  
    await server.start();

    server.applyMiddleware({ app });
  
    await new Promise(resolve => httpServer.listen({ port: 9000 }, resolve));
  
    console.log(`🚀 Server ready`);
  }

  export default startApolloServer;