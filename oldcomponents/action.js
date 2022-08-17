export const addSavedPost = text => ({
    type:'SAVE_POST',
    payload:text
})

export const removePost =post => ({
    type:'REMOVE_POST',
    payload: post
})