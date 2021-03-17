import { Client } from "@configs";
import { SERVICE } from "@environments";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => (
  <ApolloProvider client={Client}>
    <BrowserRouter>{children}</BrowserRouter>
  </ApolloProvider>
);

export { AppProvider };
