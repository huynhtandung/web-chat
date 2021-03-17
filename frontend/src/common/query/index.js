import gql from "graphql-tag";

export const ME = gql`
  query {
    me {
      currentUser {
        _id
        username
        fullName
      }
    }
  }
`;

export const FRIENDS = gql`
  query {
    friends {
      user {
        _id
        fullName
      }
      friend {
        _id
        fullName
      }
      lastMessage
    }
  }
`;

export const MESSAGES = gql`
  query($input: MessagesInput!) {
    messages(input: $input) {
      sender
      receiver
      message
    }
  }
`;
