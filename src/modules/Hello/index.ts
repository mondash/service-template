import { GraphQLSchemaModule } from "apollo-server-core";
import { gql } from "apollo-server-express";

import * as GraphQL from "types/GraphQL";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

export const resolvers: GraphQL.Resolvers = {
  Query: {
    hello: () => "world",
  },
};

const module: GraphQLSchemaModule = {
  typeDefs,
  resolvers,
};

export default module;
