import { GraphQLSchemaModule } from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-express";

import * as GraphQL from "types/GraphQL";

let variable = "variable";

const helloTypeDefs = gql`
  type Query {
    hello: String!
  }
`;

export const helloResolvers: GraphQL.Resolvers = {
  Query: {
    hello: () => "world",
  },
};

const variableTypeDefs = gql`
  extend type Query {
    variable: String!
  }

  type Mutation {
    setVariable(value: String!): String!
  }
`;

const variableResolvers: GraphQL.Resolvers = {
  Query: {
    variable: () => variable,
  },
  Mutation: {
    setVariable: (_, { value }) => {
      variable = value;
      return value;
    },
  },
};

const helloModule: GraphQLSchemaModule = {
  typeDefs: helloTypeDefs,
  resolvers: helloResolvers,
};

const variableModule: GraphQLSchemaModule = {
  typeDefs: variableTypeDefs,
  resolvers: variableResolvers,
};

const modules = [helloModule, variableModule];

export const getApolloServer = (): ApolloServer =>
  new ApolloServer({
    modules,
  });
