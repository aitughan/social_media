import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let reducers =combineReducers({
    postDataPage: profileReducer,
    messengerPage: dialogsReducer
});

let store=createStore (reducers)

window.store=store;

export default store