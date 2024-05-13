import { gql } from "@apollo/client";

export const getCountryByCode = gql`
  query getCountryByCode($code: String!) {
    country(code: $code) {
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
