import * as yup from "yup";

const username = yup
  .string()
  .required("Username is required!")
  .min(6, "Min length is 6!");

const password = yup
  .string()
  .required("Password is required!")
  .min(6, "Min length is 6!");

const fullName = yup
  .string()
  .required("Fullname is required!")
  .min(6, "Min length is 6!");

export const UserRegisterValidation = yup.object().shape({
  username,
  password,
  fullName,
});

export const UserLoginValidation = yup.object().shape({
  username,
  password,
});
