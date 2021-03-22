import { Document, model, Schema } from "mongoose";
import { generateUUID } from "@utils";

const MessageSchema = new Schema({
  _id: {
    type: String,
    require: true,
    default: () => generateUUID(),
  },
  sender: {
    type: String,
    require: true,
  },
  receiver: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  sendAt: {
    type: Number,
    require: true,
  },
});

export interface MessageInterface extends Document {
  _id: string;
  sender: string;
  receiver: string;
  message: string;
  sendAt: number;
}

export const Message = model<MessageInterface>("messages", MessageSchema);
