import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    savedPosts: []
}
export const savePost = createSlice({
  name: 'savePost',
  initialState,
  reducers: {
    addSavedPost: (state, action) => {
      state.value = [...initialState, action.payload]
    },
    removeSavedPost: state => {
      state.value -= 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { addSavedPost, removeSavedPost } = savedPosts.actions
export const savedPosts = state => state.savePost.items

export default savePost.reducer