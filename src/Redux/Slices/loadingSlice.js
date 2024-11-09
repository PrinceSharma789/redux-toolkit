import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoading: state => {
      state.loading = true;
    },
    hideLoading: state => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
