import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query moviesQuery($id: ID!) {
    movie(id: $id) {
      id
      name
      genre
    }
  }
`;