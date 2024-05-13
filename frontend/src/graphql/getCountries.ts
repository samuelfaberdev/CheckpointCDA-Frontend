import { gql } from "@apollo/client";

export const getCountries = gql`
  query getCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
