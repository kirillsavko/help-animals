import { gql } from '@apollo/client';

export const GET_ALL_ANIMALS = gql`
  query {
    getAllAnimals {
      id, name, desc, image
    }
  }
`;
