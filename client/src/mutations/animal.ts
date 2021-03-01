import { gql } from '@apollo/client';

export const ADD_ANIMAL = gql`
  mutation createAnimal($input: AnimalInput) {
    createAnimal(input: $input) {
      name, desc
    }
  }
`;
