import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
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
