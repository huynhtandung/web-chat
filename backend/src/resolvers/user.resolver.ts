import { User } from "@models";
import { comparePassword, generateToken, hashPassword } from "@utils";
import {
  SearchUserValidation,
  UserLoginValidation,
  UserRegisterValidation,
} from "@validations";
import { ApolloError } from "apollo-server-errors";

export const UserResolver = {
  Query: {
    me: (_, __, { currentUser }) => ({ currentUser }),
    searchUser: async (_, { input }) => {
      await SearchUserValidation.validate(input);
      const { keyword } = input;
      return await User.find({
        $or: [
          {
            username: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            fullName: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
      });
    },
  },
  Mutation: {
    register: async (_, { input }) => {
      await UserRegisterValidation.validate(input);
      const { username, password, fullName } = input;
      const existedUser = await User.findOne({ username });
      if (existedUser) {
        throw new ApolloError("Username is already existed!");
      }

      const user = new User({
        username,
        password: await hashPassword(password),
        fullName,
      });
      await user.save();
      return user;
    },
    login: async (_, { input }) => {
      await UserLoginValidation.validate(input);
      const { username, password } = input;
      const user = await User.findOne({ username });
      if (!user) {
        throw new ApolloError("User is not found!");
      }

      const checkPass = await comparePassword(password, user.password);
      if (!checkPass) {
        throw new ApolloError("Incorrect password!");
      }

      return {
        accessToken: generateToken(user),
      };
    },
  },
};
