import { Document, model, Schema } from "mongoose";
import { generateUUID } from "@utils";

const UserSchema = new Schema({
  _id: {
    type: String,
    require: true,
    default: () => generateUUID(),
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
});

export interface UserInterface extends Document {
  _id: string;
  username: string;
  password: string;
  fullName: string;
}

export const User = model<UserInterface>("users", UserSchema);
