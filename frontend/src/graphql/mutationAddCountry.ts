import { gql } from "@apollo/client";

export const mutationAddCountry = gql`
  mutation addCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
    }
  }
`;
