import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
    
    _state:{
        postDataPage: {
            postData:[
                {id:1, message:"H how ar u",likesCount: 24},
                {id:2, message:"67",likesCount:0},
                {id:3, message:"345",likesCount:500},
          ],
          newPostText: ''
        },
        messengerPage  :{
            dialogData:[
                {id:1, name: "Ronaldo"},
                {id:2, name: "Bekzat"},
                {id:3, name: "Ali"},
                {id:4, name: "Messi"}
                ],
            messageData:[
                {id:1, message:"Hi"},
                {id:2, message:"Ha"},
                {id:3, message:"H3"},
                {id:4, message:"H5"}
                ],
            newMessageData: ""
        },
       
        sidebar :{}
    },
    _callSubscriber(){},
    getState(){
        
        return this._state
    },
    subscribe (observer){
        this._callSubscriber= observer
    },
    dispatch(action){
        this._state.postDataPage = profileReducer(this._state.postDataPage, action);
        this._state.messengerPage = dialogsReducer(this._state.messengerPage, action);
        this._callSubscriber(this._state)  
    },
}

export default store;
window.store=store;