import {  sendMessageActionCreator, updateNewDialogMessageActionCreator } from "../../redux/dialogs-reducer";
import {connect} from "react-redux"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {

    return {
        messengerPage: state.messengerPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: () => dispatch(sendMessageActionCreator()),
        updateNewMessage: (text) =>  dispatch(updateNewDialogMessageActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;