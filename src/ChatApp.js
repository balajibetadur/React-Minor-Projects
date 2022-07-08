import React from "react";
import Header from "./ChatApp/Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './ChatApp/Pages/Home/Home';
import SignUp from './ChatApp/Pages/SignUp/SignUp';
import Login from './ChatApp/Pages/Login/Login';
import Chat from './ChatApp/Pages/Chat/Chat';
import './App.css'
import NewLogin from "./ChatApp/Pages/NewLogin/NewLogin";


function ChatApp() {
  return (
    <div className="ChatApp">
      <Router>
        <Routes>
          <Route path = '/' element = { <NewLogin/> }/>
          {/* <Route path = '/' element = { <Login/> }/> */}
          <Route path = '/login' element = { <Login/> }/>
          <Route path = '/signup' element = { <SignUp/> }/>
          <Route path = '/chat' element = { <Chat/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default ChatApp;
