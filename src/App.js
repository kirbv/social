import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App(props) {
  return (
    <div className="Wrapp">
      <Header/>
      <Navbar navbarPage={props.state.navbarPage}/>
      <div>
        <Routes>
        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} onPostChange={props.onPostChange} name="Илон Маск" status="Богатый" livePlace="Америка"/>}/>
        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
