import {
  AuthenticationError,
  SchemaDirectiveVisitor,
} from "apollo-server-express";
import { defaultFieldResolver } from "graphql";

export default class IsAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args) {
      const { currentUser } = args[2];

      if (!currentUser) {
        throw new AuthenticationError("Invalid token!");
      }

      return resolve.apply(this, args);
    };
  }
}
