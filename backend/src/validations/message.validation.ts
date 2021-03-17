import * as yup from "yup";

const receiver = yup.string().required("Receiver is required!");

const message = yup.string().required("Message is required!");

export const MessagesValidation = yup.object().shape({
  receiver,
});

export const SendMessageValidation = yup.object().shape({
  receiver,
  message,
});
