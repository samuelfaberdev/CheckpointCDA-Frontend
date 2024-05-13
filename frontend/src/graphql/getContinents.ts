import { gql } from "@apollo/client";

export const getContinents = gql`
  query getContinents {
    continents {
      id
      name
    }
  }
`;
