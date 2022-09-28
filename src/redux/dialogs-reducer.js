const SEND_MESSAGE= 'SEND-MESSAGE'
const UPDATE_NEW_DIALOG_MESSAGE ='UPDATE-NEW-DIALOG-MESSAGE'

let initialState ={
    
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
}

const dialogsReducer = (state=initialState, action) => {
   
    switch(action.type) {
        case SEND_MESSAGE:{
            let newMessage=state.newMessageData
            return {
                ...state,
                newMessageData: '',
                messageData: [...state.messageData,{id:state.messageData.length+2, message:newMessage}]
            }
        }
        case UPDATE_NEW_DIALOG_MESSAGE:
            return {
                ...state,
                newMessageData: action.newMessage
            }
        default:
            return state;
    }
}
export const sendMessageActionCreator = () =>({type:SEND_MESSAGE})
export const updateNewDialogMessageActionCreator = (message) => ({type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: message})

export default dialogsReducer