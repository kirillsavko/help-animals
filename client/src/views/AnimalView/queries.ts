import { gql } from '@apollo/client';

export const GET_ANIMAL = gql`
  query($id: ID) {
    getAnimal(id: $id) {
      id, name, desc, img, age
    }
  }
`;
