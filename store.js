import { configureStore } from '@reduxjs/toolkit'
import savedPostsReducer from './redux/savedPostsReducer'
import loginReducer from './redux/loginReducer'

export default configureStore({
  reducer: {
    savedPosts: savedPostsReducer,
    user: loginReducer
  }
})