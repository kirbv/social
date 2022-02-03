import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App(props) {
  console.log(props);
  return (
    <div className="Wrapp">
      <Header/>
      <Navbar navbarPage={props.state.navbarPage}/>
      <div>
        <Routes>
        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} name="Илон Маск" status="Богатый" livePlace="Америка"/>}/>
        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} newMessageText={props.state.dialogsPage.newMessageText} onMessageChange={props.onMessageChange} dispatch={props.dispatch}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
