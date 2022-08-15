import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedPosts:[]
}

const savePostsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'SAVE_POST':
      console.log(state)
      console.log('ADIONADO')

      return {
        ...state,
        savedPosts: [...state.savedPosts, action.payload]
      }
    case 'REMOVE_POST':
      console.log(state)
      console.log('REMOVIDO')

      return{
        ...state,
        savedPosts: [
          ...state.savedPosts.filter((post) => post !== action.payload)
        ]
      }
      default:
        return state
  }
}
export default savePostsReducer