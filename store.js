import { combineReducers, configureStore } from '@reduxjs/toolkit';
import savedPostsReducer from './redux/savedPostsReducer';
import loginReducer from './redux/loginReducer';
import likeSlice from './redux/likedPosts';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  savedPosts: savedPostsReducer,
  user: loginReducer,
  like: likeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: {
    persistedReducer: {
      user: {
        authenticated: false,
        bio: 'bio',
      },
      savedPosts: [],
      like: [],
    },
  },
});
export const persistor = persistStore(store);

// export default configureStore({
//   reducer: {
//     savedPosts: savedPostsReducer,
//     user: loginReducer,
//     like: likeSlice,
//   },
//   preloadedState: {
//     user: {
//       authenticated: false,
//       bio: 'bio',
//     },
//     savedPosts: [],
//   },
// });
export default store;
