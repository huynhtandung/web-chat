import { ACCESS_TOKEN } from "@environments";
import { resolvers } from "@resolvers";
import { typeDefs } from "@typeDefs";
import { verifyToken } from "@utils";
import {
  ApolloServerExpressConfig,
  AuthenticationError,
} from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";

export const pubSub = new PubSub();

export const graphqlConfig: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  // schemaDirectives,
  context: async ({ req, connection }) => {
    if (connection) {
      const { currentUser } = connection.context;
      return {
        currentUser,
      };
    }

    let currentUser;
    const token = req.headers[ACCESS_TOKEN];

    if (token) {
      currentUser = await verifyToken(token);
    }

    return {
      currentUser,
    };
  },
  subscriptions: {
    onConnect: async (connectionParams) => {
      let currentUser;
      const token = connectionParams[ACCESS_TOKEN];
      if (token) {
        currentUser = await verifyToken(token);
        return { currentUser };
      }

      throw new AuthenticationError("Invalid token!");
    },
    onDisconnect: () => {},
  },
};
