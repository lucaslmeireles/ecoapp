import { createSlice } from '@reduxjs/toolkit';
export const likeSlice = createSlice({
  name: 'like',
  initialState: [null],
  reducers: {
    addLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index].likes += 1;
      } else {
        state.push({
          id: action.payload.id,
          liked: action.payload.liked,
          likes: (action.payload.likes += 1),
        });
      }
    },

    removeLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index].likes -= 1;
    },
    toggleLiked: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index].liked = action.payload.liked;
    },
  },
});

export const { addLike, removeLike, toggleLiked, cleanState } =
  likeSlice.actions;

export default likeSlice.reducer;
