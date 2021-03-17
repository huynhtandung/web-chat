import { hash, compare } from "bcrypt";
import { SALT } from "@environments";

export const hashPassword = async (password: string): Promise<string> =>
  await hash(password, SALT);

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => await compare(password, hash);
