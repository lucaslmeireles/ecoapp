import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
	name: 'posts',
	initialState: {},
	reducers: {
		loginUser: (state, action) => {
			const user = {
			email: action.payload.email,
			name: action.payload.name,
			userImage: action.payload.picture,
      		};
			state.user = user;
		},
	},
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;