import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
// import { create } from 'zustand';
import { getCharacters } from '../../../../gql/queries/getCharacters';
import SearchResults from '.';

// interface MockStore {
//   page: number;
//   pageCount: number;
//   searchTerm: string;
//   setPageCount: (count: number) => void;
// }

// const useMockStore = create<MockStore>()((set) => ({
//   page: 1,
//   pageCount: 5,
//   searchTerm: '',
//   setPageCount: (pageCount) => set(() => ({ pageCount })),
// }));

describe('SearchResults', () => {
  it('renders the loading text', async () => {
    const mocks = [
      {
        request: {
          query: getCharacters,
          variables: {
            page: 1,
            name: '',
          },
        },
        result: {
          data: {
            characters: {
              info: { count: 100 },
              results: [],
            },
          },
        },
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchResults />
      </MockedProvider>
    );

    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });
});
