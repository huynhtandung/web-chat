/* @ts-ignore */
import { GRAPHQL_URN } from "@environments";
import { ApolloLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { split } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { errorMiddleware } from "./middleware";

const accessToken =
  localStorage.getItem("app-access-token") ||
  sessionStorage.getItem("app-access-token") ||
  "";

const httpLink = new HttpLink({
  uri: GRAPHQL_URN,
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      "access-token":
        localStorage.getItem("app-access-token") ||
        sessionStorage.getItem("app-access-token") ||
        "",
    },
  },
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "access-token":
      localStorage.getItem("app-access-token") ||
      sessionStorage.getItem("app-access-token") ||
      "",
  },
}));

const linkSplit = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([errorMiddleware, linkSplit]);

const Client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export { Client };
