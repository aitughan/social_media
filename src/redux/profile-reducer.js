const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'

let initialState ={
    postData:[
        {id:1, message:"H how ar u",likesCount: 24},
        {id:2, message:"67",likesCount:0},
        {id:3, message:"345",likesCount:500},
    ],
    newPostText: 'Aitu'
}

const profileReducer = (state=initialState,action) => {
  
    switch(action.type){
        case ADD_POST:{
            let newPost= {
                id: state.postData.length+1,
                message: state.newPostText,
                likesCount:100
            };
            return{
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state
    }
}

export const addPostActionCreator = () =>({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer