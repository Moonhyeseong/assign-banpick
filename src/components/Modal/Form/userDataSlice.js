import { createSlice } from '@reduxjs/toolkit';

const initialState = { userData: { name: '', side: '' } };

export const userDataSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    updateUserData: (state, actions) => {
      state.userData = {
        ...state.userData,
        [actions.payload.type]: actions.payload.value,
      };
    },
    initUserData: state => {
      state.userData = { name: '', side: '' };
    },
  },
});

export const { updateUserData, initUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
