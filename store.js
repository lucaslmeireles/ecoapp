import { configureStore } from '@reduxjs/toolkit';
import savedPostsReducer from './redux/savedPostsReducer';
import loginReducer from './redux/loginReducer';
import likeSlice from './redux/likedPosts';

export default configureStore({
  reducer: {
    savedPosts: savedPostsReducer,
    user: loginReducer,
    like: likeSlice,
  },
  preloadedState: {
    user: {
      authenticated: false,
      bio: 'bio',
    },
    savedPosts: [],
  },
});
