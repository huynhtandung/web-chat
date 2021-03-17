import { generateUUID } from "@utils";
import { Document, model, Schema } from "mongoose";

const FriendSchema = new Schema({
  _id: {
    type: String,
    require: true,
    default: () => generateUUID(),
  },
  user: {
    type: String,
    ref: "users",
    require: true,
  },
  friend: {
    type: String,
    ref: "users",
    require: true,
  },
  lastMessage: {
    type: String,
    require: true,
  },
});

export interface FriendInterface extends Document {
  _id: string;
  user: string;
  friend: string;
  lastMessage: string;
}

export const Friend = model<FriendInterface>("friends", FriendSchema);
