import { create } from 'zustand';

type Store = {
  searchTerm: string;
  onSearch: (text: string | undefined) => void;
  page: number;
  pageCount: number;
  setPageCount: (count: number) => void;
  onPaginate: (page: number) => void;
};

const useAppStore = create<Store>((set) => ({
  searchTerm: '',
  page: 1,
  pageCount: 5,
  setPageCount: (count) =>
    set(() => ({
      pageCount: Math.round(count / 20),
    })),
  onPaginate: (page) =>
    set(() => ({
      page,
    })),
  onSearch: (text: string | undefined) =>
    set(() => ({
      searchTerm: text,
    })),
}));

export default useAppStore;
