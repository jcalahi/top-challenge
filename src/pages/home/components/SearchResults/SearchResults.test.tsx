import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import { create } from 'zustand';
import { GET_CHARACTERS } from '../../../../gql/queries/getCharacters';
import SearchResults from '.';

interface MockStore {
  page: number;
  pageCount: number;
  searchTerm: string;
  setPageCount: (count: number) => void;
}

const useMockStore = create<MockStore>()((set) => ({
  page: 1,
  pageCount: 10,
  searchTerm: '',
  setPageCount: (pageCount) => set(() => ({ pageCount })),
}));

describe('SearchResults', () => {
  it('renders the loading text', async () => {
    const mocks = [
      {
        request: {
          query: GET_CHARACTERS,
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

  it('updates the pagination count', async () => {
    const mocks = [
      {
        request: {
          query: GET_CHARACTERS,
          variables: {
            page: 1,
            name: '',
          },
        },
        result: {
          data: {
            characters: {
              info: {
                count: 826,
                prev: null,
                next: 2,
              },
              results: [],
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <SearchResults />
      </MockedProvider>
    );

    const { result } = renderHook(() => useMockStore());

    act(() => {
      result.current.setPageCount(mocks[0].result.data.characters.info.count);
    });

    expect(result.current.pageCount).toBe(826);
  });
});
