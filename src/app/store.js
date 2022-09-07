import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../components/Modal/Form/userDataSlice';

export default configureStore({
  reducer: {
    userFormData: userDataReducer,
  },
});
