import { ApolloServer, gql  } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongoose from "mongoose";

/*
  const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Author {
        name: String
        books: [Book]
    }
    type Query{
        books: [Book!]!
        authors: [Author!]!
    }
`;


const books = [
    {title: 'Livro 1',author:'Josefina' },
    {title: 'Livro 2',author:'Jose' },
];

const resolvers = {
    Query: {
      books: () => books
    },
  };
*/

async function startApolloServer({typeDefs, resolvers}) {

  await mongoose.connect('mongodb://localhost:27017/graphql');


    const app = express();
  
    const httpServer = http.createServer(app);
  
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      
    });
  
    await server.start();

    server.applyMiddleware({ app });
  
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  }

  export default startApolloServer;