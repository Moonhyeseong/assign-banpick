import { createSlice } from '@reduxjs/toolkit';

const initialState = { userData: { name: '', side: '', isReady: false } };

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

    userReadyAction: state => {
      state.userData = {
        ...state.userData,
        isReady: !state.userData.isReady,
      };
    },

    initUserData: state => {
      state.userData = { name: '', side: '', isReady: false };
    },
  },
});

export const { updateUserData, initUserData, userReadyAction } =
  userDataSlice.actions;

export default userDataSlice.reducer;
