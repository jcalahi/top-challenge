import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { create } from 'zustand';
import SearchField from '.';

interface MockStore {
  searchTerm: string;
  onSearch: (text: string) => void;
}

const useMockStore = create<MockStore>()((set) => ({
  searchTerm: '',
  onSearch: (text) => set(() => ({ searchTerm: text })),
}));

describe('SearchField', () => {
  it('should render the text field', () => {
    render(<SearchField />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('should render a button', () => {
    render(<SearchField />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should pass the text input value on button click', async () => {
    render(<SearchField />);
    const { result } = renderHook(() => useMockStore());
    act(() => result.current.onSearch('Hello'));
    expect(result.current.searchTerm).toEqual('Hello');
  });
});
