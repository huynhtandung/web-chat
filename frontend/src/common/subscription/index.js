import gql from "graphql-tag";

export const MESSAGE_SENT = gql`
  subscription {
    messageSent {
      sender
      receiver
      message
    }
  }
`;
