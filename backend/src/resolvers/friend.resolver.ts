import { Friend } from "@models";

export const FriendResolver = {
  Query: {
    friends: async (_, __, { currentUser }) => {
      return await Friend.find({
        user: currentUser._id,
      }).populate([
        {
          path: "user",
        },
        {
          path: "friend",
        },
      ]);
    },
  },
};
