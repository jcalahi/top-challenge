import { create } from 'zustand';

type Store = {
  searchTerm: string;
  onSearch: (text: string | undefined) => void;
  page: number;
  prev: () => void;
  next: () => void;
};

const useAppStore = create<Store>((set) => ({
  searchTerm: '',
  page: 1,
  prev: () => {},
  next: () => {},
  onSearch: (text: string | undefined) =>
    set(() => ({
      searchTerm: text,
    })),
}));

export default useAppStore;
