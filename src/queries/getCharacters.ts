import { gql } from '@apollo/client';

export const getCharacters = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
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
