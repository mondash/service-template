import { GraphQLSchemaModule } from "apollo-server-core";
import { gql } from "apollo-server-express";

import * as GraphQL from "types/GraphQL";

let variable = "variable";

const typeDefs = gql`
  extend type Query {
    variable: String!
  }

  type Mutation {
    setVariable(value: String!): String!
  }
`;

export const resolvers: GraphQL.Resolvers = {
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

const module: GraphQLSchemaModule = {
  typeDefs,
  resolvers,
};

export default module;
