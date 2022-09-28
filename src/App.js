import React from "react";
import './App.css'
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () =>{
 
  return(
    
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
        <Route path='/dialogs' 
              element={<DialogsContainer/>}/>
        <Route path='/profile' 
              element={<Profile/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/musics" element={<Musics
                />}/>
        </Routes>
      </div>
  </div>
 
  );
 
}


export default App
