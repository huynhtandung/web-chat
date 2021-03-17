import gql from "graphql-tag";

export const REGISTER = gql`
  mutation($input: UserRegisterInput!) {
    register(input: $input) {
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation($input: UserLoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
`;
