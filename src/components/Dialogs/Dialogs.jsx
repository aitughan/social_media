import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs =(props) => {
    let state =props.messengerPage
    let newMessageElement =React.createRef();
    let sendMessage = ()=>{
        props.sendMessage();
    }
    let updateNewMessage = () =>{
        let message  = newMessageElement.current.value
        props.updateNewMessage(message)
    }
    let dialogsElements= state.dialogData.map((d)=><DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements=state.messageData.map((m)=><Message key={m.id} message={m.message} id={m.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div><textarea onChange={updateNewMessage} value={state.newMessageData} ref={newMessageElement} type="text"></textarea></div>
                    <div><button onClick={sendMessage}>Send Message</button> </div>
                    
                
            </div>
           
        </div>
    )
}

export default Dialogs;