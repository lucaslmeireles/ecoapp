import { createSlice } from '@reduxjs/toolkit';
import client from '../sanity';
//IMplementação como sanity para funcionar
export const likeSlice = createSlice({
  name: 'like',
  initialState: [null],
  reducers: {
    addLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index].likes += 1;
      } else {
        client.patch(action.payload.id).inc({ likes: 1 });
        state.push({
          id: action.payload.id,
          liked: action.payload.liked,
          likes: (action.payload.likes += 1),
        });
      }
    },
    removeLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      client.patch(action.payload.id).dec({ likes: 1 });
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
