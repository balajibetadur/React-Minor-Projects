import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './Socket/Join/Join';
import Chat from './Socket/Chat/Chat';
import './App.css'


function Socket() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path = '/' element = { <Join/> } />
          <Route path = '/chat' element = { <Chat/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default Socket