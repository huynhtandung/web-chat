import { AuthenticationError } from "apollo-server-errors";
import { ACCESS_TOKEN_SECRET } from "@environments";
import { sign, verify } from "jsonwebtoken";
import { User, UserInterface } from "@models";

export const generateToken = (user: UserInterface): string => {
  return sign(
    {
      userId: user._id,
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = async (token: string): Promise<UserInterface> => {
  let currentUser: UserInterface;

  await verify(token, ACCESS_TOKEN_SECRET, async (err, data) => {
    if (err) {
      throw new AuthenticationError("Invalid token!");
    }

    currentUser = await User.findOne({ _id: data.userId });
    if (!currentUser) {
      throw new AuthenticationError("Invalid token!");
    }
  });

  return currentUser;
};
