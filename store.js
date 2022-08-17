import { configureStore } from '@reduxjs/toolkit'
import savedPostsReducer from './redux/savedPostsReducer'

export default configureStore({
  reducer: {
    savedPosts: savedPostsReducer
  }
})