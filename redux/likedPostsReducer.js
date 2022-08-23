import { createSlice } from '@reduxjs/toolkit';
import client from '../sanity';
//IMplementação como sanity para funcionar
export const likeSlice = createSlice({
  name: 'like',
  initialState: [null],
  reducers: {
    addLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      // if (index !== -1) {
      //   client
      //     .patch(action.payload.id)
      //     .inc({ likes: 1 })
      //     .commit()
      //     .then(() => {
      //       state[index].likes += 1;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // } else {
      client
        .patch(action.payload.id)
        .inc({ likes: 1 })
        .commit()
        .then(() => {
          state.push({
            id: action.payload.id,
            liked: action.payload.liked,
            likes: (action.payload.likes += 1),
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    removeLike: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      client
        .patch(action.payload.id)
        .dec({ likes: 1 })
        .commit()
        .then(() => {
          state[index].likes -= 1;
        })
        .catch((err) => {});
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
