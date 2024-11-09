import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import loadingReducer from './Slices/loadingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loader: loadingReducer,
  },
});
