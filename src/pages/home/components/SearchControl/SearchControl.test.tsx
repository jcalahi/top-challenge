import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { create } from 'zustand';
import SearchControl from '.';

interface MockStore {
  page: number;
  onPaginate: (page: number) => void;
}

const useMockStore = create<MockStore>()((set) => ({
  page: 0,
  onPaginate: (page) => set(() => ({ page })),
}));

describe('SearchControl', () => {
  it('can change the active page', () => {
    render(<SearchControl />);
    const { result } = renderHook(() => useMockStore());
    act(() => result.current.onPaginate(1));
    expect(result.current.page).toEqual(1);
  });
});
