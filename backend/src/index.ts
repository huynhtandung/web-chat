import { graphqlConfig } from "@configs";
import { MONGO_URI, SERVER_PORT } from "@environments";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as mongoose from "mongoose";
import * as http from "http";

const app = express();
const server = new ApolloServer(graphqlConfig);
server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

mongoose.connect(
  MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error("Error when connect to database! ", err);
    } else {
      console.log("🌨️  Database connected!");
    }
  }
);

httpServer.listen({ port: SERVER_PORT }, () => {
  console.log("🚀 Server is running!");
});
