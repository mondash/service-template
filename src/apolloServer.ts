import { ApolloServer } from "apollo-server-express";

import modules from "modules";

export const getApolloServer = (): ApolloServer =>
  new ApolloServer({
    modules,
  });
