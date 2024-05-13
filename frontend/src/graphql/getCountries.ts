import { gql } from "@apollo/client";

export const getCountries = gql`
  query getCountries {
    countries {
      id
      name
      emoji
    }
  }
`;
