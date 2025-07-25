import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '@/services/pages';

interface PageSelectorState {
  selectedPage: Page | null;
  availablePages: Page[];
  loading: boolean;
  error: string | null;
}

const initialState: PageSelectorState = {
  selectedPage: null,
  availablePages: [],
  loading: false,
  error: null,
};

const pageSelectorSlice = createSlice({
  name: 'pageSelector',
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<Page | null>) => {
      state.selectedPage = action.payload;
    },
    setAvailablePages: (state, action: PayloadAction<Page[]>) => {
      state.availablePages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearPageSelector: (state) => {
      state.selectedPage = null;
      state.availablePages = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setSelectedPage,
  setAvailablePages,
  setLoading,
  setError,
  clearPageSelector,
} = pageSelectorSlice.actions;

export default pageSelectorSlice.reducer; 