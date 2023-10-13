import { gql } from '@apollo/client';

export const getCharacters = gql`
  query Characters {
    characters {
      info {
        count
        prev
        next
      }
      results {
        name
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
