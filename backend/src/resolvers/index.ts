import { mergeResolvers } from "@graphql-tools/merge";
import { FriendResolver } from "./friend.resolver";
import { MessageResolver } from "./message.resolver";
import { UserResolver } from "./user.resolver";

const typesArray = [UserResolver, MessageResolver, FriendResolver];
export const resolvers = mergeResolvers(typesArray);
