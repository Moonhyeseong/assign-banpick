import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../components/Modal/Form/userDataSlice';
// import { createWrapper } from 'next-redux-wrapper';

const store = configureStore({
  reducer: {
    userFormData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
