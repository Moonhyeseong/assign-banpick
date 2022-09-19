import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../components/Modal/Form/userDataSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      userFormData: userDataReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
