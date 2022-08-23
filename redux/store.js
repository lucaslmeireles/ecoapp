import { combineReducers, configureStore } from '@reduxjs/toolkit';
import savedPostsReducer from './savedPostsReducer';
import loginReducer from './loginReducer';
import likeReducer from './likedPostsReducer';
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
  like: likeReducer,
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

export default store;
