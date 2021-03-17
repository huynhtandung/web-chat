import { pubSub } from "@configs";
import { Friend, Message, User } from "@models";
import { MessagesValidation, SendMessageValidation } from "@validations";
import { ApolloError, withFilter } from "apollo-server-express";

export const MessageResolver = {
  Query: {
    messages: async (_, { input }, { currentUser }) => {
      await MessagesValidation.validate(input);
      const { receiver } = input;
      return await Message.find({
        $or: [
          {
            sender: currentUser._id,
            receiver,
          },
          {
            receiver: currentUser._id,
            sender: receiver,
          },
        ],
      });
    },
  },
  Mutation: {
    sendMessage: async (_, { input }, { currentUser }) => {
      await SendMessageValidation.validate(input);
      const { receiver, message } = input;
      const existedUser = await User.findOne({ _id: receiver });
      if (!existedUser) {
        throw new ApolloError("Receiver not found!");
      }

      const senderFriend = await Friend.findOne({
        user: currentUser._id,
        friend: receiver,
      });

      if (!senderFriend) {
        const newSenderFriend = new Friend({
          user: currentUser._id,
          friend: receiver,
        });

        console.log("run here", newSenderFriend, currentUser._id, receiver);

        await newSenderFriend.save();
      }

      //update last message for sender
      await Friend.updateOne(
        {
          user: currentUser._id,
          friend: receiver,
        },
        {
          $set: {
            lastMessage: message,
          },
        }
      );

      const receiverFriend = await Friend.findOne({
        user: receiver,
        friend: currentUser._id,
      });

      if (!receiverFriend) {
        const newReceiverFriend = new Friend({
          user: receiver,
          friend: currentUser._id,
        });

        await newReceiverFriend.save();
      }

      //update last message for reciver
      await Friend.updateOne(
        {
          user: receiver,
          friend: currentUser._id,
        },
        {
          $set: {
            lastMessage: message,
          },
        }
      );

      const newMessage = new Message({
        sender: currentUser._id,
        receiver,
        message,
      });

      await newMessage.save();
      pubSub.publish("messageSent", { messageSent: newMessage });
      return newMessage;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: withFilter(
        () => {
          return pubSub.asyncIterator("messageSent");
        },
        ({ messageSent }, _, { currentUser }) => {
          return messageSent.receiver === currentUser._id;
        }
      ),
      resolve: ({ messageSent }) => {
        return messageSent;
      },
    },
  },
};
