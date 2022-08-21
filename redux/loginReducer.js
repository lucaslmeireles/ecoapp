import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    authenticated: false,
    bio: 'bio',
    email: '',
    name: '',
    userImage: '',
  },
  reducers: {
    loginUser: (state, action) => {
      const user = {
        email: action.payload.email,
        name: action.payload.name,
        userImage: action.payload.picture,
        authenticated: true,
      };
      state.user = user;
    },
    logoutUser: (state) => {
      const user = {
        email: '',
        name: '',
        userImage: '',
        authenticated: false,
      };
      state.user = user;
    },
    addBio: (state, action) => {
      const user = { ...state.user, bio: action.payload.bio };
      state.user = user;
    },
  },
});

export const { loginUser, logoutUser, addBio } = loginSlice.actions;

export default loginSlice.reducer;
