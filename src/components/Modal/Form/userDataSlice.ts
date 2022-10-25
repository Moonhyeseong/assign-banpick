import { createSlice } from '@reduxjs/toolkit';

type UserData = {
  userData: { name: string; side: string; role: string; isReady: boolean };
};

const initialState: UserData = {
  userData: { name: '', side: '', role: '', isReady: false },
};

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
      state.userData = { name: '', side: '', role: '', isReady: false };
      sessionStorage.removeItem('USER_ID');
    },

    getUserData: (state, actions) => {
      state.userData = actions.payload;
    },
  },
});

export const { updateUserData, initUserData, userReadyAction, getUserData } =
  userDataSlice.actions;

export default userDataSlice.reducer;
