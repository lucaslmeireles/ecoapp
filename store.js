import { configureStore } from '@reduxjs/toolkit'
import savedPostsReducer from './features/savedPosts'

export default configureStore({
  reducer: {
    savedPosts: savedPostsReducer
  }
})