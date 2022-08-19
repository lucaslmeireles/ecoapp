import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		addPost: (state, action) => {
			const index = state.findIndex((post) => post.id === action.payload.id)
			if(index !== -1) return state
			const post = {
			id: action.payload.id,
			title: action.payload.title,
			imageUrl: action.payload.imageUrl,
			category: action.payload.category,
			authorImg: action.payload.authorImg,
			authorName: action.payload.authorName,
			published_at: action.payload.published_at,
			likes: action.payload.likes,
			text: action.payload.text,
			saved: null
      };
			state.push(post);
		},
		toggleBookmark: (state, action) => {
			const index = state.findIndex((post) => post.id === action.payload.id);
			state[index].saved = action.payload.saved;
		},
		deletepost: (state, action) => {
			return state.filter((post) => post.id !== action.payload.id);
		},
		cleanState: (state,action) => {
			if(action.payload.clean === 'clean'){
				state = []
			}
		},
		addLike: (state,action) => {
			const index = state.findIndex((post) => post.id === action.payload.id);
			state[index].likes += 1
		},
		removeLike: (state,action) => {
			const index = state.findIndex((post) => post.id === action.payload.id);
			state[index].likes -= 1
		}

	},
});

export const { addPost, toggleBookmark, deletepost, cleanState } = postSlice.actions;

export default postSlice.reducer;