import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedPosts:[
    
  ],
}

const savePostsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'SAVE_POST':
      return {
        ...state,
        savedPosts: [...state.savedPosts, {
          id: action.payload.id,
          title: action.payload.title,
          imageUrl: action.payload.imageUrl,
          category: action.payload.category,
          saved: !action.payload.saved
        }],
        
      }
    case 'REMOVE_POST':
      const index = state.savedPosts.findIndex((post) => post.id !== action.payload.id)
      let newSavedPost = [...state.savedPosts]
      console.log(newSavedPost, index)

      if(index >= 0){
        newSavedPost.splice(index,1)
      }
      return{
        ...state,
        savedPosts: [
         newSavedPost
        ],
        
      }
      default:
        return state
  }
}
export default savePostsReducer